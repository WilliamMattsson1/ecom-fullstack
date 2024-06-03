import './CartPriceDetails.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartPriceDetails = () => {
    const { getTotalCartAmount } = useContext(CartContext)
    const shippingStandard: number = 2.99
    const totalCartAmount = getTotalCartAmount()
    const shipping = totalCartAmount > 100 ? 0 : shippingStandard
    const totalWithShipping = totalCartAmount + shipping

    return (
        <div className="cart-price-box">
            <h2 className="cart-price-detail-title">Price Details</h2>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Subtotal</p>
                <p className="cart-price-detail-right">
                    {totalCartAmount.toFixed(2)}
                </p>
            </div>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Shipping</p>
                <p className="cart-price-detail-right">
                    {shipping === 0 ? (
                        <span>
                            <span className="old-shipping">
                                ${shippingStandard.toFixed(2)}
                            </span>
                            <span>Free</span>
                        </span>
                    ) : (
                        `$${shipping.toFixed(2)}`
                    )}
                </p>
            </div>
            <div className="cart-price-detail total-sum">
                <p className="cart-price-detail-left">Total</p>
                <p className="cart-price-detail-right">
                    ${totalWithShipping.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default CartPriceDetails
