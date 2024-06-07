import './CheckoutForm.css'
import { useContext, useState, ChangeEvent, FormEvent } from 'react'
import { CartContext } from '../../Context/CartContext'

const CheckoutForm = () => {
    const { cartItems } = useContext(CartContext)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData((userData) => ({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Order submitted:', userData, cartItems)
    }

    return (
        <>
            <div className="checkout-form">
                <h3>Shipping Information</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </>
    )
}

export default CheckoutForm
