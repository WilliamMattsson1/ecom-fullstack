import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import ProductItem from '../../Components/ProductItem/ProductItem'
import './GenderProducts.css'

interface GenderProductsProps {
    gender: string
}

/* Ska inhämta produkter från parametern props.gender och visa alla produkter med det gender */
const GenderProducts = (props: GenderProductsProps) => {
    interface Product {
        id: number
        name: string
        price: number
        gender: string
        category: string
        image: string
    }

    const products: Product[] = [
        {
            id: 5,
            name: 'Mens T-shirt Military Green Long Sleeve',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 6,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 7,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 8,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 9,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 10,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 11,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 12,
            name: 'Mens T-shirt',
            price: 200,
            gender: 'men',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 13,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 14,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 15,
            name: 'Woman T-shirt White',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 16,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 17,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 18,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 19,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        },
        {
            id: 20,
            name: 'Woman T-shirt',
            price: 200,
            gender: 'woman',
            category: 't-shirt',
            image: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHwy'
        }
    ]

    /* Get array with the right gender */
    const genderProducts = products.filter(
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
