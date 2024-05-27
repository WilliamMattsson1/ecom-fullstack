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
            <BreadCrumbs />
            {rightProduct && <ProductDetails product={rightProduct} />}
            <SimilarProducts products={similarProductsFour} />
            <InfoBox />
            <Footer />
        </>
    )
}

export default ProductDetailsPage
