/* import './CartPromoBox.css'

const CartPromoBox = () => {
    return (
        <>
            <div className="cart-promo-container">
                <input
                    className="cart-promo-input"
                    type="text"
                    placeholder="Promo code"
                />
                <button className="cart-promo-button">Apply</button>
            </div>
        </>
    )
}

export default CartPromoBox */

import { useState } from 'react'
import './CartPromoBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartPromoBox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [discountCode, setDiscountCode] = useState<string>('')

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(e.target.value)
    }

    const handleApplyCode = () => {
        console.log(discountCode)
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
                    <button onClick={handleApplyCode}>Apply</button>
                </div>
            )}
        </div>
    )
}

export default CartPromoBox
