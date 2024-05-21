import './DownArrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const DownArrow = () => {
    const handleClick = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
    return (
        <div className="down-arrow-container">
            <FontAwesomeIcon
                onClick={handleClick}
                className="down-arrow"
                icon={faAngleDown}
            />
        </div>
    )
}

export default DownArrow
