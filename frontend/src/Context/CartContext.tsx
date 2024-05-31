import React, { createContext, useEffect, useState } from 'react'
import useProducts from './useProducts'

interface CartContextType {
    cartItems: Record<number, number>
    setCartItems: React.Dispatch<React.SetStateAction<Record<number, number>>>
    addToCart: (productId: number) => void
    removeFromCart: (productId: number) => void
    getTotalCartAmount: () => number
    getTotalCartItems: () => number
}

/* Adding default values to not handle in components */
const defaultCartContext: CartContextType = {
    cartItems: {},
    setCartItems: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => 0,
    getTotalCartItems: () => 0
}

export const CartContext = createContext<CartContextType>(defaultCartContext)

const getDefaultCart = (): Record<number, number> => {
    // Skapar en tom cart med 100 produktId som keys och 0 som value (quantity)
    const cart: Record<number, number> = {}
    for (let index = 0; index < 100 + 1; index++) {
        cart[index] = 0
    }
    return cart
}

type CartContextProps = {
    children: React.ReactNode
}

const CartContextProvider = ({ children }: CartContextProps) => {
    const { allProducts } = useProducts()
    const [cartItems, setCartItems] =
        useState<Record<number, number>>(getDefaultCart())

    // Om det finns token, alltså inloggning, hämta cartItems från databasen för den inloggade användaren
    useEffect(() => {
        const fetchCartItems = async () => {
            if (localStorage.getItem('token')) {
                try {
                    const response = await fetch('/getcart', {
                        method: 'POST',
                        headers: {
                            token: `${localStorage.getItem('token')}`,
                            'Content-Type': 'application/json'
                        },
                        body: ''
                    })
                    const data = await response.json()
                    console.log('Data from fetchCartItems:', data)
                    setCartItems(data)
                } catch (error) {
                    console.error('Error when fetching cart', error)
                }
            }
        }

        fetchCartItems()
    }, [])

    const addToCart = async (productId: number): Promise<void> => {
        // Produkterna lägga till i cartItems
        setCartItems((prev) => {
            const newCartItems = { ...prev }
            if (newCartItems[productId]) {
                newCartItems[productId]++
            } else {
                newCartItems[productId] = 1
            }
            return newCartItems
        })

        // Om användaren är inloggad, lägg till produkten i databasen. Läggs i tabellen cartItems
        if (localStorage.getItem('token')) {
            try {
                const response = await fetch('/cart/add', {
                    method: 'POST',
                    headers: {
                        token: `${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ productId: productId })
                })

                const data = await response.json()
                console.log(data) /* Product added to cart */
            } catch (error) {
                console.error('Error adding product to cart:', error)
            }
        } else {
            console.log('User is not logged in')
            console.log('Non user added:', productId)
            console.log('Cart items:', cartItems)
        }
    }

    const removeFromCart = async (productId: number): Promise<void> => {
        // Ta bort alla av den productId
        setCartItems((prev) => {
            const newCartItems = { ...prev }
            if (newCartItems[productId] > 0) {
                newCartItems[productId] = 0
            }
            return newCartItems
        })
        // Om användaren är inloggad, ta bort produkten från databasen. Tas bort från tabellen cartItems
        if (localStorage.getItem('token')) {
            try {
                const response = await fetch('/cart/remove', {
                    method: 'POST',
                    headers: {
                        token: `${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ productId })
                })

                const data = await response.json()
                console.log(data) // Product removed from cart, ID
            } catch (error) {
                console.error('Error removing product from cart:', error)
            }
        }
    }

    const getTotalCartAmount = (): number => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = allProducts.find(
                    (product) => product.id === Number(item)
                )
                totalAmount += itemInfo!.price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = (): number => {
        let totalItems = 0
        for (const item in cartItems) {
            totalItems += cartItems[item]
        }
        return totalItems
    }

    const contextValue: CartContextType = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
