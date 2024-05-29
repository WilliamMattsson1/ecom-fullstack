import './EmptyCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="empty-cart-container">
            <FontAwesomeIcon
                className="empty-cart-icon"
                icon={faCartShopping}
            />
            <h2>Your cart is empty</h2>
            <p>Login to get ur saved items or go to all products.</p>
            <div className="empty-cart-btn-container">
                <Link to="/login">
                    <button className="empty-cart-btn-left">Login</button>
                </Link>
                <Link to="/products">
                    <button className="empty-cart-btn-right">Products</button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart
