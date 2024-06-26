import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import useProducts from '../../Context/useProducts'
import { Link } from 'react-router-dom'
import PopupCartRemoved from '../PopupCartRemoved/PopupCartRemoved'

const CartItems = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [popupProduct, setPopupProduct] = useState('')

    const { allProducts } = useProducts()
    const { cartItems, getTotalCartItems, removeFromCart } =
        useContext(CartContext)

    const handleRemoveClick = (
        e: React.MouseEvent<SVGSVGElement>,
        productId: number
    ) => {
        e.preventDefault()
        const product = allProducts.find((p) => p.id === productId)
        if (product) {
            setPopupProduct(product.name)
            setShowPopup(true)
        }
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
                                                    ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="cart-item-info-quantity">
                                            {quantity}
                                        </p>
                                        <p className="cart-item-info-total">
                                            $
                                            {(product.price * quantity).toFixed(
                                                2
                                            )}
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
            {showPopup && (
                <PopupCartRemoved
                    product={popupProduct}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </>
    )
}

export default CartItems
