import './CartPriceDetails.css'

const CartPriceDetails = () => {
    return (
        <div className="cart-price-box">
            <h2 className="cart-price-detail-title">Price Details</h2>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Subtotal</p>
                <p className="cart-price-detail-right">$802</p>
            </div>
            <div className="cart-price-detail">
                <p className="cart-price-detail-left">Shipping</p>
                <p className="cart-price-detail-right">$0</p>
            </div>
            <div className="cart-price-detail total-sum">
                <p className="cart-price-detail-left">Total</p>
                <p className="cart-price-detail-right">$802</p>
            </div>
        </div>
    )
}

export default CartPriceDetails
