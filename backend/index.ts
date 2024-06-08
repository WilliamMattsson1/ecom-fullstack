import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import { Database } from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

let database: Database
;(async () => {
    database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'shop2.sqlite'
    })

    console.log('Connected to the SQLite database')
})()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/allproducts', async (_req, res) => {
    const result = await database.all('SELECT * FROM products')
    console.log(result)
    res.json(result)
})

app.post('/subscribe', async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(400).json({ message: 'Email is required' })
    }

    const query = `INSERT INTO newsletterSubs (email) VALUES (?)`
    try {
        await database.run(query, [email])
        res.status(201).json({
            message: 'Email added to the newsletter list'
        })
    } catch {
        res.status(500).json({
            message: 'Email already exists in the newsletter list'
        })
    }
})

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`
    try {
        await database.run(query, [name, email, hashedPassword])
        res.status(201).json({ message: 'User created' })
    } catch {
        res.status(500).json({ message: 'User already exists' })
    }
})

/* Login med bcrypt */
app.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const query = `SELECT * FROM users WHERE email = ?`
    const user = await database.get(query, [email])
    if (!user) {
        return res.status(401).json({ message: 'Invalid email' })
    }

    const passwordCorrect = await bcrypt.compare(password, user.password)
    if (!passwordCorrect) {
        return res.status(401).json({ message: 'Invalid password' })
    } else {
        const token = jwt.sign({ userId: user.id }, 'william-password321')
        return res.status(200).json({
            message: 'Login successful (from backend)',
            token: token,
            user: user
        })
    }
})

app.post('/cart/add', async (req, res) => {
    const { productId } = req.body

    const token = req.headers.token as string
    const decoded = jwt.verify(token, 'william-password321') as {
        userId: number
    }
    const userId = decoded.userId

    if (!userId || !productId) {
        return res.status(400).json({
            message: 'User ID and Product ID are required',
            userId,
            productId
        })
    }

    try {
        await database.run(
            `INSERT INTO cartItems (user_id, product_id) VALUES (?, ?)`,
            [userId, productId]
        )
        res.status(201).json({ message: 'Product added to cart' })
    } catch (error) {
        res.status(500).json({
            message: 'Error adding product to cart',
            error
        })
    }
})

app.post('/cart/remove', async (req, res) => {
    const { productId } = req.body

    const token = req.headers.token as string
    const decoded = jwt.verify(token, 'william-password321') as {
        userId: number
    }
    const userId = decoded.userId

    if (!userId || !productId) {
        return res.status(400).json({
            message: 'User ID and Product ID are required',
            userId,
            productId
        })
    }

    try {
        // Tar bort alla produkter med product_id och user_id.
        await database.run(
            `DELETE FROM cartItems WHERE user_id = ? AND product_id = ?`,
            [userId, productId]
        )
        res.status(200).json({
            message: 'Product removed from cart',
            productId: productId
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error removing product from cart'
        })
    }
})

// Get the cart items for the logged in user
app.post('/getcart', async (req, res) => {
    const token = req.headers.token as string
    const decoded = jwt.verify(token, 'william-password321') as {
        userId: number
    }
    const userId = decoded.userId

    try {
        // Get all the cart items for the userId
        const result = await database.all(
            'SELECT * FROM cartItems WHERE user_id = ?',
            [userId]
        )

        console.log('Här är items innan forEachen:', result)
        // Create an object with the product_id as the key and the quantity as the value
        const cartItems: Record<number, number> = {}
        result.forEach((item) => {
            cartItems[item.product_id] = cartItems[item.product_id]
                ? cartItems[item.product_id] + 1
                : 1
        })
        console.log('Här är cartItems efter forEachen:', cartItems)

        return res.status(200).json(cartItems)
    } catch (error) {
        console.error('Error fetching cart items:', error)
        return res.status(500).json({ message: 'Error fetching cart items' })
    }
})

app.get('/checkadmin', async (req, res) => {
    const token = req.headers.token as string
    try {
        const decoded = jwt.verify(token, 'william-password321') as {
            userId: number
        }
        const userId = decoded.userId

        const query = 'SELECT * FROM adminUsers WHERE user_id = ?'
        const admin = await database.get(query, [userId])

        if (admin) {
            return res.status(200).json({ isAdmin: true })
        } else {
            return res.status(200).json({ isAdmin: false })
        }
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Error checking admin status', error })
    }
})

app.post('/addproduct', async (req, res) => {
    const {
        productName,
        productPrice,
        productCategory,
        productGender,
        productImage
    } = req.body
    if (
        !productName ||
        !productPrice ||
        !productCategory ||
        !productGender ||
        !productImage
    ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const query = `INSERT INTO products (name, price, category, gender, image) VALUES (?, ?, ?, ?, ?)`
    try {
        await database.run(query, [
            productName,
            productPrice,
            productCategory,
            productGender,
            productImage
        ])
        res.status(201).json({ message: 'Product added' })
    } catch {
        res.status(500).json({ message: 'Error adding product' })
    }
})

app.post('/deleteproduct', async (req, res) => {
    const { productId } = req.body
    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' })
    }

    const query = `DELETE FROM products WHERE id = ?`
    try {
        await database.run(query, [productId])
        res.status(200).json({ message: 'Product deleted' })
    } catch {
        res.status(500).json({ message: 'Error deleting product' })
    }
})

interface CartItem {
    product_id: number
}

app.post('/createorder', async (req, res) => {
    const { cartItems, totalAmount, discount } = req.body
    const token = req.headers.token as string
    console.log('Token:', token)

    try {
        if (token === 'null') {
            return res
                .status(401)
                .json({ message: 'User must sign in to place orders' })
        }
        const decoded = jwt.verify(token, 'william-password321') as {
            userId: number
        }
        const userId = decoded.userId

        const userCartItems: CartItem[] = []
        for (const productId in cartItems) {
            const product_id = parseInt(productId)
            userCartItems.push({ product_id })
        }
        console.log('User cart items:', userCartItems)

        if (userCartItems.length === 0 || !totalAmount) {
            return res.status(400).json({
                message: 'Cart items and total amount are required (empty cart)'
            })
        }

        const result = await database.run(
            `INSERT INTO orders (user_id, total_amount, discount) VALUES (?, ?, ?)`,
            [userId, totalAmount, discount]
        )
        const orderId = result.lastID

        const orderItemsPromises = userCartItems.map(async (item) => {
            const product = await database.get(
                `SELECT price FROM products WHERE id = ?`,
                [item.product_id]
            )
            const price = product ? product.price : 0
            return database.run(
                `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`,
                [orderId, item.product_id, cartItems[item.product_id], price]
            )
        })

        await Promise.all(orderItemsPromises)

        res.json({ message: 'Order created', orderId })
    } catch (error) {
        console.error('Error creating order:', error)
        return res.status(401).json({
            message: 'Catched: Invalid token or other error',
            error: error
        })
    }
})

app.get('/orderdata/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId

        const orderQuery = `SELECT * FROM orders WHERE id = ?`
        const order = await database.get(orderQuery, [orderId])

        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        }

        const orderItemsQuery = `SELECT * FROM order_items WHERE order_id = ?`
        const orderItems = await database.all(orderItemsQuery, [orderId])

        res.json({ order, orderItems })
    } catch (error) {
        console.error('Error fetching order data:', error)
        return res.status(500).json({ message: 'Server error' })
    }
})

app.post('/clearcart', async (req, res) => {
    const token = req.headers.token as string
    try {
        if (!token || token === 'null') {
            return res
                .status(401)
                .json({ message: 'User must sign in to clear cart' })
        }

        const decoded = jwt.verify(token, 'william-password321') as {
            userId: number
        }
        const userId = decoded.userId

        const query = `DELETE FROM cartItems WHERE user_id = ?`
        await database.run(query, [userId])

        res.status(200).json({ message: 'Cart cleared successfully' })
    } catch (error) {
        console.error('Error clearing cart:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
