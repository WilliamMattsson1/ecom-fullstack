import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()

    return (
        <>
            <Navbar />
            <OfferBanner />
            <BreadCrumbs />
            <h1>Product Details - {params.id}</h1>
            <Footer />
        </>
    )
}

export default ProductDetails
