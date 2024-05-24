import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartPriceDetails from '../CartPriceDetails/CartPriceDetails'
import CartPromoBox from '../CartPromoBox/CartPromoBox'

const CartItems = () => {
    const products = [
        {
            id: 400,
            name: 'Product 400',
            price: 400,
            gender: 'men',
            category: 'tops',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 401,
            name: 'Product 401',
            price: 401,
            gender: 'men',
            category: 'tops',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 402,
            name: 'Product 402',
            price: 402,
            gender: 'men',
            category: 'tops',
            image: 'https://via.placeholder.com/150'
        }
    ]

    const cartItems = [400, 402]
    return (
        <>
            <div className="cart-items-container">
                <div className="cart-items">
                    <div className="cart-items-titles">
                        <p>Products</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <div className="cart-items-items">
                        {products.map((product) => {
                            if (cartItems.includes(product.id)) {
                                return (
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
                                            1
                                        </p>
                                        <p className="cart-item-info-total">
                                            ${product.price}
                                        </p>
                                        <FontAwesomeIcon
                                            className="cart-remove-icon"
                                            icon={faXmark}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="cart-right-container">
                    <CartPriceDetails />
                    <CartPromoBox />
                    <div className="cart-checkout-btn-container">
                        <button className="cart-checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems
