import './ProductDetails.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

interface Product {
    id: number
    name: string
    price: number
    gender: string
    category: string
    image: string
}

const ProductDetails = ({ product }: { product: Product }) => {
    const { addToCart } = useContext(CartContext) || {
        addToCart: () => {}
    }

    return (
        <div className="product-details">
            <div className="product-details-img-container">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details-text-container">
                <h2>{product.name}</h2>
                <h4>
                    {product.category.toUpperCase()} -{' '}
                    {product.gender.toUpperCase()}
                </h4>
                <div className="sizes">
                    <h4>Sizes:</h4>
                    <p>XS</p>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                </div>
                <div className="product-details-text-info">
                    <h5>Product Info</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed et felis metus. Sed in purus nec purus feugiat
                        elementum. Nullam nec purus nec purus feugiat elementum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque nostr
                    </p>
                </div>
                <h6>${product.price}</h6>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product.id)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
