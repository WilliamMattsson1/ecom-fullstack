import './PopupCartRemoved.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faX } from '@fortawesome/free-solid-svg-icons'

interface PopupCartAddedProps {
    product: string
    onClose: () => void
}

const PopupCartRemoved = ({ product, onClose }: PopupCartAddedProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 4000)

        return () => {
            clearTimeout(timer)
        }
    }, [onClose])
    return (
        <div
            className="popup-cart-status-container"
            style={{ backgroundColor: 'red' }}
        >
            <div className="popup-cart-text">
                <FontAwesomeIcon className="popup-icon" icon={faTrashCan} />
                <p>{product} removed from cart</p>
            </div>
            <FontAwesomeIcon className="x-icon" icon={faX} onClick={onClose} />
        </div>
    )
}

export default PopupCartRemoved
