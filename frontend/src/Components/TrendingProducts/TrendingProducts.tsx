import ProductItem from '../ProductItem/ProductItem'
import DownArrow from '../DownArrow/DownArrow'
import './TrendingProducts.css'
import useProducts from '../../Context/useProducts'

const TrendingProducts = () => {
    const { allProducts } = useProducts()
    const trendingProducts = allProducts.slice(0, 4)
    console.log('Trending products (4)', trendingProducts)

    return (
        <>
            <div className="trending-products-container">
                <h1 className="title">Trending Products</h1>
                <p className="trending-products-p">
                    Explore our latest and most popular items
                </p>
                <hr className="hr-1" />
                <div className="trending-products">
                    {trendingProducts.map((product) => {
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
