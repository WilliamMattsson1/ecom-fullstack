import './InfoBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTruckFast,
    faHeadset,
    faMoneyBillTransfer,
    faFileShield
} from '@fortawesome/free-solid-svg-icons'

const InfoBox = () => {
    return (
        <>
            <div className="info-box-container">
                <div className="info-box">
                    <FontAwesomeIcon
                        className="info-box-icon"
                        icon={faTruckFast}
                    />
                    <h3>Free Shipping</h3>
                    <p>On all orders over $100</p>
                </div>
                <hr />
                <div className="info-box">
                    <FontAwesomeIcon
                        className="info-box-icon"
                        icon={faHeadset}
                    />
                    <h3>Customer Support</h3>
                    <p>Call us at 123 456 789</p>
                </div>
                <hr />
                <div className="info-box">
                    <FontAwesomeIcon
                        className="info-box-icon"
                        icon={faMoneyBillTransfer}
                    />
                    <h3>Money Back Guarantee</h3>
                    <p>If you are not satisfied</p>
                </div>
                <hr />
                <div className="info-box">
                    <FontAwesomeIcon
                        className="info-box-icon"
                        icon={faFileShield}
                    />
                    <h3>Secure Payment</h3>
                    <p>Safe & Fast</p>
                </div>
            </div>
        </>
    )
}

export default InfoBox
