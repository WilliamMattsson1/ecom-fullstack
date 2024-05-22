import ProductItem from '../ProductItem/ProductItem'
import DownArrow from '../DownArrow/DownArrow'
import './TrendingProducts.css'

const TrendingProducts = () => {
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
            id: 1,
            name: 'Product 1',
            price: 100,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 400,
            gender: 'woman',
            category: 'tops',
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <>
            <div className="trending-products-container">
                <h1 className="title">Trending Products</h1>
                <p className="trending-products-p">
                    Explore our latest and most popular items
                </p>
                <hr className="hr-1" />
                <div className="trending-products">
                    {products.map((product) => {
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
            <DownArrow />
        </>
    )
}

export default TrendingProducts
