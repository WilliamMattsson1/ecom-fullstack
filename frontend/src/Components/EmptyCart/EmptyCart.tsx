import './EmptyCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const EmptyCart = () => {
    const { isLoggedIn } = useContext(AuthContext)
    console.log('isLoggedIn:', isLoggedIn)

    return (
        <>
            {isLoggedIn ? (
                <div className="empty-cart-container">
                    <FontAwesomeIcon
                        className="empty-cart-icon"
                        icon={faCartShopping}
                    />
                    <h2>Your cart is empty</h2>
                    <p>Go to all products to find something you like.</p>
                    <Link to="/products">
                        <button className="empty-cart-btn">Products</button>
                    </Link>
                </div>
            ) : (
                <div className="empty-cart-container">
                    <FontAwesomeIcon
                        className="empty-cart-icon"
                        icon={faCartShopping}
                    />
                    <h2>Your cart is empty</h2>
                    <p>Login to get ur saved items or go to all products.</p>
                    <div className="empty-cart-btn-container">
                        <Link to="/login">
                            <button className="empty-cart-btn-left">
                                Login
                            </button>
                        </Link>
                        <Link to="/products">
                            <button className="empty-cart-btn-right">
                                Products
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default EmptyCart
