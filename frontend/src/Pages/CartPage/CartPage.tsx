import CartItems from '../../Components/CartItems/CartItems'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import './CartPage.css'
const CartPage = () => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <CartItems />
            <Footer />
        </>
    )
}

export default CartPage
