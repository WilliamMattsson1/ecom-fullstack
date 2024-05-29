import { useEffect } from 'react'
import './PopupCartAdded.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

interface PopupCartAddedProps {
    product: string
    onClose: () => void
}

const PopupCartAdded = ({ product, onClose }: PopupCartAddedProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 4000)

        return () => {
            clearTimeout(timer)
        }
    }, [onClose])

    return (
        <div className="popup-cart-status-container">
            <div className="popup-cart-text">
                <FontAwesomeIcon className="popup-check-icon" icon={faCheck} />{' '}
                <p>{product} added to cart</p>
            </div>
            <FontAwesomeIcon className="x-icon" icon={faX} onClick={onClose} />
        </div>
    )
}

export default PopupCartAdded
