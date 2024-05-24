import CartItems from '../../Components/CartItems/CartItems'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import CartPriceDetails from '../../Components/CartPriceDetails/CartPriceDetails'
import CartPromoBox from '../../Components/CartPromoBox/CartPromoBox'
import './CartPage.css'
const CartPage = () => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <div className="cart-items-container">
                <CartItems />
                <div className="cart-right-container">
                    <CartPriceDetails />
                    <CartPromoBox />
                    <div className="cart-checkout-btn-container">
                        <button className="cart-checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CartPage
