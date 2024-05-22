import './BreadCrumbs.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const BreadCrumbs = () => {
    const location = useLocation()
    const { pathname } = location
    const pathParts = pathname.split('/')
    console.log(pathParts)

    const breadCrumbs = pathParts.map((pathPart, index) => {
        const url = pathParts.slice(0, index + 1).join('/')
        const fixedPathPart = pathPart.replace(/%20/g, ' ')

        return (
            <span className="each-breadcrumb" key={index}>
                <Link className="breadcrumb-link" to={url}>
                    {fixedPathPart.toUpperCase()}
                </Link>
                {index < pathParts.length - 1 && ' / '}{' '}
                {/* Lägger till / på alla utom sista. */}
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
