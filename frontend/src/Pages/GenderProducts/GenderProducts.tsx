import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import ProductItem from '../../Components/ProductItem/ProductItem'
import './GenderProducts.css'
import useProducts from '../../Context/useProducts'

interface GenderProductsProps {
    gender: string
}

const GenderProducts = (props: GenderProductsProps) => {
    const { allProducts } = useProducts()

    /* Get array with the right gender */
    const genderProducts = allProducts.filter(
        (product) => product.gender === props.gender
    )

    return (
        <>
            <Navbar />
            <OfferBanner />
            <BreadCrumbs />
            <div className="gender-products-container">
                <h1 className="gender-products-title">
                    All products for {props.gender}
                </h1>
                <hr className="hr-1" />
                <div className="gender-products">
                    {genderProducts.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                gender={product.gender}
                                category={product.category}
                                image={product.image}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GenderProducts
