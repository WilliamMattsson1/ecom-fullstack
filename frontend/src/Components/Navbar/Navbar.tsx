import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                        <NavLink
                            to={link.url}
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}

                <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <li className="login-link">Login</li>
                </Link>
            </ul>
            <div className="right-container">
                <div className="cart-container">
                    <Link to="/cart">
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faCartShopping}
                        />
                        <div className="cart-count">0</div>
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
