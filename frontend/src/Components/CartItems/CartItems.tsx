import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import useProducts from '../../Context/useProducts'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const { allProducts } = useProducts()
    const { cartItems } = useContext(CartContext) || {
        getDefaultCart: () => ({})
    }
    const { getTotalCartItems } = useContext(CartContext) || {
        getTotalCartItems: () => 0
    }

    const { removeFromCart } = useContext(CartContext) || {
        removeFromCart: () => {}
    }

    const handleRemoveClick = (
        e: React.MouseEvent<SVGSVGElement>,
        productId: number
    ) => {
        e.preventDefault()
        removeFromCart(productId)
    }

    return (
        <>
            <div className="cart-items">
                <h2 className="cart-title">
                    Cart products ({getTotalCartItems()} items)
                </h2>
                <div className="cart-items-titles">
                    <p>Products</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <div className="cart-items-items">
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
                                >
                                    <div className="cart-item" key={product.id}>
                                        <div className="cart-item-info">
                                            <img
                                                className="cart-item-image"
                                                src={product.image}
                                                alt={product.name}
                                            />
                                            <div className="cart-item-info-p-c">
                                                <p className="cart-item-info-name">
                                                    {product.name}
                                                </p>
                                                <p className="cart-item-info-price">
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="cart-item-info-quantity">
                                            {quantity}
                                        </p>
                                        <p className="cart-item-info-total">
                                            ${product.price * quantity}
                                        </p>
                                        <FontAwesomeIcon
                                            onClick={(e) =>
                                                handleRemoveClick(e, product.id)
                                            }
                                            className="cart-remove-icon"
                                            icon={faXmark}
                                        />
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
        </>
    )
}

export default CartItems
