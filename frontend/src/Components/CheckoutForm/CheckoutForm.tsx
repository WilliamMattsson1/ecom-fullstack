import './CheckoutForm.css'
import { useContext, useState, ChangeEvent, FormEvent } from 'react'
import { CartContext } from '../../Context/CartContext'

const CheckoutForm = () => {
    const { cartItems } = useContext(CartContext)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
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
            <div className="checkout-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="checkout-forms">
                        <div className="checkout-form">
                            <h3 className="checkout-form-title">
                                Billing Address
                            </h3>
                            <div className="checkout-input-box">
                                <span>Full name:</span>
                                <input
                                    type="text"
                                    placeholder="William Mattsson"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="checkout-input-box">
                                <span>Email:</span>
                                <input
                                    type="email"
                                    placeholder="william@test.com"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="checkout-input-box">
                                <span>Address:</span>
                                <input
                                    type="text"
                                    placeholder="Vaksalagatan 23"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="checkout-half-input">
                                <div className="checkout-input-box">
                                    <span>City:</span>
                                    <input
                                        type="text"
                                        placeholder="Uppsala"
                                        name="city"
                                        value={userData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="checkout-input-box">
                                    <span>Zip Code:</span>
                                    <input
                                        type="text"
                                        placeholder="75436"
                                        name="zipCode"
                                        value={userData.zipCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="checkout-form">
                            <h3 className="checkout-form-title">Payment</h3>

                            <div className="checkout-input-box">
                                <span>Name on card:</span>
                                <input
                                    type="text"
                                    placeholder="William Mattsson"
                                    name="cardName"
                                    value={userData.cardName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="checkout-input-box">
                                <span>Card Number:</span>
                                <input
                                    type="text"
                                    placeholder="1234 5678 1234 5678"
                                    name="cardNumber"
                                    value={userData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="checkout-input-box">
                                <span>Exp. Month:</span>
                                <input
                                    type="text"
                                    placeholder="07"
                                    name="expMonth"
                                    value={userData.expMonth}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="checkout-half-input">
                                <div className="checkout-input-box">
                                    <span>Exp. Year:</span>
                                    <input
                                        type="text"
                                        placeholder="27"
                                        name="expYear"
                                        value={userData.expYear}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="checkout-input-box">
                                    <span>CVV:</span>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        name="cvv"
                                        value={userData.cvv}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="checkout-btn">
                        Place Order
                    </button>
                </form>
            </div>
        </>
    )
}

export default CheckoutForm
