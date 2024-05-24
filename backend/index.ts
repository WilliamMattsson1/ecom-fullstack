import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import { Database } from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'
import jwt from 'jsonwebtoken'

let database: Database
;(async () => {
    database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'shop.sqlite'
    })

    console.log('Connected to the SQLite database')
})()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/products', async (_req, res) => {
    let result = await database.all('SELECT * FROM products')
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
        res.status(201).json({ message: 'Email added to the newsletter list' })
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

    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`
    try {
        await database.run(query, [name, email, password])
        res.status(201).json({ message: 'User created' })
    } catch {
        res.status(500).json({ message: 'User already exists' })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const query = `SELECT * FROM users WHERE email = ? AND password = ?`
    const user = await database.get(query, [email, password])
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' })
    } else {
        const token = jwt.sign({ userId: user.id }, 'william-password321')
        return res
            .status(200)
            .json({ message: 'Login successful (from backend)', token: token })
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
