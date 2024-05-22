import './BreadCrumbs.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const BreadCrumbs = () => {
    const location = useLocation()
    console.log(location.pathname) /* /products/men */
    const { pathname } = location
    const segments = pathname.split('/')

    const breadCrumbs = segments.map((segment, index) => {
        const url = segments.slice(0, index + 1).join('/')
        return (
            <span className="each-breadcrumb" key={index}>
                <Link className="breadcrumb-link" to={url}>
                    {segment.toUpperCase()}
                </Link>
                {index < segments.length - 1 && ' / '}
            </span>
        )
    })
    return (
        <>
            <div className="breadcrumbs">
                <Link to="/" className="breadcrumb-link">
                    <span className="each-breadcrumb">
                        <FontAwesomeIcon
                            className="house-icon"
                            icon={faHouse}
                        />
                    </span>
                </Link>
                {breadCrumbs}
            </div>
        </>
    )
}

export default BreadCrumbs
