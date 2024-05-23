import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'
import './ProductDetailsPage.css'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    /* Placeholder products */
    interface ProductItem {
        id: number
        name: string
        price: number
        gender: string
        category: string
        image: string
    }

    const products: ProductItem[] = [
        {
            id: 123,
            name: 'Product 1',
            price: 120,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 124,
            name: 'Mens T-shirt Military Green Long Sleeve',
            price: 200,
            gender: 'men',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 125,
            name: 'Product 125',
            price: 120,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 126,
            name: 'Product 126',
            price: 120,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 127,
            name: 'Product 1',
            price: 120,
            gender: 'woman',
            category: 'top4',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 201,
            name: 'Liknande produkt 1',
            price: 120,
            gender: 'men',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 202,
            name: 'Liknande produkt 2',
            price: 120,
            gender: 'men',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 203,
            name: 'Liknande produkt 3',
            price: 120,
            gender: 'men',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 204,
            name: 'Liknande produkt 4',
            price: 120,
            gender: 'men',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    const params = useParams()
    console.log(params.productName)

    // Hittar produkten som matchar params.productName
    const rightProduct = products.find(
        (product) => product.name === params.productName
    )

    if (rightProduct) {
        console.log('Hittade proudkten', rightProduct)
    } else {
        console.log('Product not found')
    }

    /* Hittar liknande produkter med samma kategori, samma gender. Och inte är samma produkt */
    const similarProducts = products.filter(
        (product) =>
            product.category === rightProduct?.category &&
            product.gender === rightProduct?.gender &&
            product.id !== rightProduct?.id
    )

    console.log('Similar products', similarProducts)

    return (
        <>
            <Navbar />
            <OfferBanner />
            <BreadCrumbs />
            {rightProduct && <ProductDetails product={rightProduct} />}
            <SimilarProducts products={similarProducts} />
            <InfoBox />
            <Footer />
        </>
    )
}

export default ProductDetailsPage
