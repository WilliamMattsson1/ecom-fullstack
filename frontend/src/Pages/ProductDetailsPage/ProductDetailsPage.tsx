import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'
import './ProductDetailsPage.css'
import { useParams } from 'react-router-dom'
import useProducts from '../../Context/useProducts'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ProductDetailsPage = () => {
    const { allProducts } = useProducts()

    const params = useParams()
    console.log(params.productName)

    // Hittar produkten som matchar params.productName
    const rightProduct = allProducts.find(
        (product) => product.name === params.productName
    )

    if (rightProduct) {
        console.log('Hittade proudkten', rightProduct)
    } else {
        console.log('Product not found!')
    }

    /* Hittar liknande produkter med samma kategori, samma gender. Och inte är samma produkt */
    const similarProducts = allProducts.filter(
        (product) =>
            product.category === rightProduct?.category &&
            product.gender === rightProduct?.gender &&
            product.id !== rightProduct?.id
    )
    console.log('Similar products', similarProducts)

    const similarProductsFour = similarProducts.slice(0, 4)

    return (
        <>
            <Navbar />
            <OfferBanner />

            {rightProduct ? (
                <>
                    <BreadCrumbs />
                    <ProductDetails product={rightProduct} />
                    <SimilarProducts products={similarProductsFour} />
                    <InfoBox />
                </>
            ) : (
                <>
                    <div className="notfound-product-container">
                        <FontAwesomeIcon
                            className="error-icon"
                            icon={faTriangleExclamation}
                        />
                        <h2>
                            Sorry, the product you are looking for could not be
                            found.
                        </h2>
                        <p>Go back to the all products</p>
                        <Link
                            className="notfound-product-btn-link"
                            to="/products"
                        >
                            <button className="not-found-btn">Products</button>
                        </Link>
                    </div>
                </>
            )}

            <Footer />
        </>
    )
}

export default ProductDetailsPage
