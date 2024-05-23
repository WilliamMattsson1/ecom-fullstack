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
                {products.map((product, index) => (
                    <div key={index} className="similar-product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price} kr</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimilarProducts
