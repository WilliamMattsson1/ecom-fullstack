import './CartPriceDetails.css'

const CartPriceDetails = () => {
    return (
        <div className="cart-price-box">
            <div className="cart-price-details">
                <p>Subtotal</p>
                <p>$802</p>
            </div>
            <div className="cart-price-details">
                <p>Shipping</p>
                <p>$10</p>
            </div>
            <div className="cart-price-details">
                <p>Total</p>
                <p>$812</p>
            </div>
            <button className="cart-price-button">Checkout</button>
        </div>
    )
}

export default CartPriceDetails
