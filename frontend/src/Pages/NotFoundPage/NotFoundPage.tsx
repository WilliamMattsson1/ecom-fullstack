import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './NotFoundPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const NotFoungPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <FontAwesomeIcon
                    className="error-icon"
                    icon={faCircleExclamation}
                />
                <h2>Sorry, the page you are looking for could not be found.</h2>
                <p>Go back to the homepage</p>
                <button>
                    <Link className="btn-link" to="/">
                        Home
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default NotFoungPage
