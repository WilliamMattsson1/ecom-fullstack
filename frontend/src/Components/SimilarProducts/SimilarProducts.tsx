import ProductItem from '../ProductItem/ProductItem'
import './SimilarProducts.css'

interface ProductItem {
    id: number
    name: string
    price: number
    gender: string
    category: string
    image: string
}

interface SimilarProductsProps {
    products: ProductItem[]
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
    return (
        <div className="similar-products-container">
            <h2>Similar Products</h2>
            <p>Other also bought these</p>
            <hr className="hr-1" />
            <div className="similar-products">
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
    )
}

export default SimilarProducts
