import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import useProducts from '../../Context/useProducts'
import { Link } from 'react-router-dom'
import './CheckoutProducts.css'

const CheckoutProducts = () => {
    const { allProducts } = useProducts()
    const { cartItems, getTotalCartItems, getTotalCartAmount } =
        useContext(CartContext)
    return (
        <div className="checkout">
            <h2 className="checkout-title">Order Details</h2>
            <div className="checkout-items">
                <h3>Your {getTotalCartItems()} items</h3>
                <div className="checkout-items-titles">
                    <p>Products</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <div className="checkout-items">
                    {allProducts.map((product) => {
                        if (cartItems && cartItems[product.id] > 0) {
                            const quantity = cartItems[product.id]

                            return (
                                <Link
                                    to={`/products/${product.gender}/${product.name}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}
                                    key={product.id}
                                >
                                    <div className="checkout-item">
                                        <div className="checkout-item-info">
                                            <img
                                                className="checkout-item-image"
                                                src={product.image}
                                                alt={product.name}
                                            />
                                            <div className="checkout-item-info-p-c">
                                                <p className="checkout-item-info-name">
                                                    {product.name}
                                                </p>
                                                <p className="checkout-item-info-price">
                                                    ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="checkout-item-info-quantity">
                                            {quantity}
                                        </p>
                                        <p className="checkout-item-info-total">
                                            $
                                            {(product.price * quantity).toFixed(
                                                2
                                            )}
                                        </p>
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>
            </div>

            <div className="checkout-total">
                <h3>Total Price: ${getTotalCartAmount().toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default CheckoutProducts
