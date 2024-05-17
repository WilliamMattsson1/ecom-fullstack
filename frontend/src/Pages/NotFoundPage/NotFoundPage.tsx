import { Link } from 'react-router-dom'

const NotFoungPage = () => {
    return (
        <div>
            <h1>Sorry, the page you are looking for could not be found.</h1>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default NotFoungPage
