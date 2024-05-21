import ProductItem from '../ProductItem/ProductItem'
import DownArrow from '../DownArrow/DownArrow'
import './TrendingProducts.css'

const TrendingProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            image: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 400,
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
