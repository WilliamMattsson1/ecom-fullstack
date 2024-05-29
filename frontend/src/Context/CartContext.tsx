import React, { createContext, useState, useEffect } from 'react'

interface CartContextType {
    cartItems: Record<number, number>
    setCartItems: React.Dispatch<React.SetStateAction<Record<number, number>>>
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

    const contextValue: CartContextType = {
        cartItems,
        setCartItems
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
