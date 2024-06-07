import { useContext } from 'react'
import CartItems from '../../Components/CartItems/CartItems'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import CartPriceDetails from '../../Components/CartPriceDetails/CartPriceDetails'
import CartPromoBox from '../../Components/CartPromoBox/CartPromoBox'
import EmptyCart from '../../Components/EmptyCart/EmptyCart'
import InfoBox from '../../Components/InfoBox/InfoBox'
import './CartPage.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { getTotalCartItems } = useContext(CartContext)

    return (
        <>
            <Navbar />
            <OfferBanner />
            {getTotalCartItems() > 0 ? (
                <>
                    <div className="cart-items-container">
                        <CartItems />
                        <div className="cart-right-container">
                            <div className="">
                                <CartPriceDetails />
                            </div>
                            <div>
                                <CartPromoBox />
                                <div className="cart-checkout-btn-container">
                                    <Link to="/checkout">
                                        <button className="cart-checkout-btn">
                                            Checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <EmptyCart />
                    <InfoBox />
                </>
            )}

            <Footer />
        </>
    )
}

export default CartPage
