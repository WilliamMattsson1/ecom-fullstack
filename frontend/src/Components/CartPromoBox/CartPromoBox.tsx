import './CartPromoBox.css'

/* Att man kan trycka så öppnas den. Tänker liknande styling som checkout btn */
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
