import GenderSelection from '../../Components/GenderSelection/GenderSelection'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import './ProductsPage.css'
import InfoBox from '../../Components/InfoBox/InfoBox'
const ProductsPage = () => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <GenderSelection />
            <InfoBox />
            <Footer />
        </>
    )
}

export default ProductsPage
