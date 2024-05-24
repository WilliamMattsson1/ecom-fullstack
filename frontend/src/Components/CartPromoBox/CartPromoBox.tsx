import './CartPromoBox.css'

const CartPromoBox = () => {
    return (
        <>
            <div className="cart-promo-container">
                <input
                    className="cart-promo-input"
                    type="text"
                    placeholder="Promo code"
                />
                <button className="cart-promo-button">Apply</button>
            </div>
        </>
    )
}

export default CartPromoBox
