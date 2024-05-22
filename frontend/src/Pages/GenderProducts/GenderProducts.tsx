import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import './GenderProducts.css'

interface GenderProductsProps {
    gender: string
}

/* Ska visa breadcrumbs vart vi är /products/men */
/* Ska inhämta produkter från parametern props.gender och visa alla produkter med det gender */
const GenderProducts = (props: GenderProductsProps) => {
    return (
        <>
            <Navbar />
            <OfferBanner />
            <BreadCrumbs />
            <h1>{props.gender}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.gender} Clothing</h1>
            <Footer />
        </>
    )
}

export default GenderProducts
