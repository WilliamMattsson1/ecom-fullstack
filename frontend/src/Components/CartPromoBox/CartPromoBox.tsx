import { useState, useContext } from 'react'
import './CartPromoBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Context/CartContext'

const CartPromoBox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [discountCode, setDiscountCode] = useState<string>('')
    const { applyDiscount, isDiscountApplied } = useContext(CartContext)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(e.target.value)
    }

    const handleApplyCode = () => {
        applyDiscount(discountCode)
        console.log('Discount input:', discountCode)
        setDiscountCode('')
    }

    return (
        <div className="cart-promo-box">
            <div className="accordion-header" onClick={toggleAccordion}>
                <span>Have a promo code?</span>
                <span className={`promo-arrow ${isOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <input
                        type="text"
                        value={discountCode}
                        onChange={handleInputChange}
                        placeholder="Enter promo code"
                    />
                    <button
                        onClick={handleApplyCode}
                        disabled={isDiscountApplied}
                    >
                        {isDiscountApplied ? 'Code Applied' : 'Apply'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default CartPromoBox
