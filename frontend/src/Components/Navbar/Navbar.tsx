import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png'

interface LinkItem {
    url: string
    text: string
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const links: LinkItem[] = [
        { url: '/', text: 'Home' },
        { url: '/products', text: 'Products' },
        { url: '/about', text: 'About' }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {links.map((link, index) => (
                    <li key={index} className="nav-link">
                        <Link to={link.url} className="nav-link">
                            {link.text}
                        </Link>
                    </li>
                ))}

                <li className="nav-link login-link">
                    <Link
                        to="/login"
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        Login
                    </Link>
                </li>
            </ul>
            <div className="right-container">
                <div className="cart-container">
                    <Link to="/cart">
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faCartShopping}
                        />
                    </Link>
                </div>
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
