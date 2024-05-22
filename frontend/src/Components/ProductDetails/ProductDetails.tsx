import './ProductDetails.css'

interface Product {
    id: number
    name: string
    price: number
    gender: string
    category: string
    image: string
}

const ProductDetails = ({ product }: { product: Product }) => {
    return (
        <div className="product-details">
            <h1>Produkt id - {product.id}</h1>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} kr</p>
        </div>
    )
}

export default ProductDetails
