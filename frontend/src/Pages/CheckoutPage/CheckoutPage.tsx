import CheckoutProducts from '../../Components/CheckoutProducts/CheckoutProducts'
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'

const Checkout = () => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <CheckoutProducts />
            <CheckoutForm />
            <Footer />
        </>
    )
}

export default Checkout
