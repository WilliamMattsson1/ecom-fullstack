import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png'

import useScroll from '../../Context/useScroll'

interface LinkItem {
    url: string
    text: string
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        localStorage.getItem('token') ? true : false
    )
    const links: LinkItem[] = [
        { url: '/', text: 'Home' },
        { url: '/products', text: 'Products' },
        { url: '/about', text: 'About' }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token') ? true : false)
    }, [isLoggedIn])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    const { scrollToTop } = useScroll()

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
                            onClick={scrollToTop}
                            to={link.url}
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}

                {isLoggedIn ? (
                    <Link
                        onClick={scrollToTop}
                        to="/"
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <li className="login-link" onClick={handleLogout}>
                            Log out
                        </li>
                    </Link>
                ) : (
                    <Link
                        onClick={scrollToTop}
                        to="/login"
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <li className="login-link">Login</li>
                    </Link>
                )}
            </ul>
            <div className="right-container">
                <div className="cart-container">
                    <Link onClick={scrollToTop} to="/cart">
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
