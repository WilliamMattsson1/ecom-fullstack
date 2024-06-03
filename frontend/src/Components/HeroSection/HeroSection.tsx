import './HeroSection.css'
import { Link } from 'react-router-dom'
import DownArrow from '../DownArrow/DownArrow'

import useScroll from '../../Context/useScroll'

const HeroSection = () => {
    const { scrollToTop } = useScroll()
    return (
        <>
            <div className="hero-section">
                <div className="hero-text-section">
                    <div className="hero-text-container">
                        <h1>Discover Your Style</h1>
                        <p>Check Our Latest Fashion</p>
                        <Link onClick={scrollToTop} to={'/products'}>
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
            <DownArrow />
        </>
    )
}

export default HeroSection
