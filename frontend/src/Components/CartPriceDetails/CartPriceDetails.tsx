import './CartPriceDetails.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartPriceDetails = () => {
    const { getTotalCartAmount } = useContext(CartContext) || {
        getTotalCartAmount: () => 0
    }
    const shipping: number = 2.99

    return (
        <div className="cart-price-box">
            <h2 className="cart-price-detail-title">Price Details</h2>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Subtotal</p>
                <p className="cart-price-detail-right">
                    {getTotalCartAmount().toFixed(2)}
                </p>
            </div>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Shipping</p>
                <p className="cart-price-detail-right">${shipping}</p>
            </div>
            <div className="cart-price-detail total-sum">
                <p className="cart-price-detail-left">Total</p>
                <p className="cart-price-detail-right">
                    ${(getTotalCartAmount() + shipping).toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default CartPriceDetails
