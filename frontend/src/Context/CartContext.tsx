import React, { createContext, useState, useEffect } from 'react'

interface CartContextType {
    cartItems: Record<number, number>
    setCartItems: React.Dispatch<React.SetStateAction<Record<number, number>>>
    addToCart: (productId: number) => void
}

export const CartContext = createContext<CartContextType | null>(null)

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
    const [cartItems, setCartItems] = useState<Record<number, number>>(
        getDefaultCart()
    )

    // Om det finns token, alltså inloggning, hämta cartItems från databasen för den inloggade användaren.
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetch('/getcart', {
                method: 'POST',
                headers: {
                    token: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: ''
            })
                .then((res) => res.json())
                .then((data) => setCartItems(data))
        }
    }, [])

    const addToCart = (productId: number): void => {
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
            fetch('/cart/add', {
                method: 'POST',
                headers: {
                    token: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId: productId })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) =>
                    console.error('Error adding product to cart:', error)
                )
        } else {
            console.log('User is not logged in')
            console.log('Non user added:', productId)
            console.log('Cart items:', cartItems)
        }
    }

    const contextValue: CartContextType = {
        cartItems,
        setCartItems,
        addToCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
