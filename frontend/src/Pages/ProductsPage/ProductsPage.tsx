import CategorySelection from '../../Components/CategorySelection/CategorySelection'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import './ProductsPage.css'
const ProductsPage = () => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <CategorySelection />
            <Footer />
        </>
    )
}

export default ProductsPage
