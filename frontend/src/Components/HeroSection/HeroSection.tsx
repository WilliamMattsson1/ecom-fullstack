import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const handleClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
    return (
        <>
            <div className="hero-section">
                <div className="hero-text-section">
                    <div className="hero-text-container">
                        <h1>Discover Your Style</h1>
                        <p>Check Or Latest Fashion</p>
                        <Link to={'/products'}>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="hero-img-container">
                    <img
                        src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hero image"
                    />
                </div>
            </div>
            <div className="down-arrow-container">
                <FontAwesomeIcon
                    onClick={handleClick}
                    className="down-arrow"
                    icon={faAngleDown}
                />
            </div>
        </>
    )
}

export default HeroSection
