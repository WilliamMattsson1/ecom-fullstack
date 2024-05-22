import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './GenderProducts.css'

interface GenderProductsProps {
    gender: string
}
const GenderProducts = (props: GenderProductsProps) => {
    return (
        <>
            <Navbar />
            <h1>{props.gender}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.gender} Clothing</h1>
            <Footer />
        </>
    )
}

export default GenderProducts
