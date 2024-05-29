import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHammer } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import useScroll from '../../Context/useScroll'
import { CartContext } from '../../Context/CartContext'

interface LinkItem {
    url: string
    text: string
}

const Navbar = () => {
    const { getTotalCartItems, setCartItems } = useContext(CartContext)

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        localStorage.getItem('token') ? true : false
    )
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    const links: LinkItem[] = [
        { url: '/', text: 'Home' },
        { url: '/products', text: 'Products' },
        { url: '/about', text: 'About' }
    ]
    const adminLink: LinkItem = { url: '/admin', text: 'Admin' }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token') ? true : false)
        if (isLoggedIn) {
            checkAdminStatus()
        }
    }, [isLoggedIn])

    const checkAdminStatus = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('/checkadmin', {
                method: 'GET',
                headers: {
                    token: token as string
                }
            })
            const data = await response.json()
            setIsAdmin(data.isAdmin)
        } catch (error) {
            console.error('Error checking admin status:', error)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        setIsAdmin(false)
        setCartItems({})
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
            {isAdmin && (
                <Link
                    to={adminLink.url}
                    className="admin-link-tag"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <div className="admin-link-container">
                        <FontAwesomeIcon
                            className="admin-icon"
                            icon={faHammer}
                        />
                        <p>{adminLink.text}</p>
                    </div>
                </Link>
            )}
            <div className="right-container">
                <div className="cart-container">
                    <Link onClick={scrollToTop} to="/cart">
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faCartShopping}
                        />
                        <div className="cart-count">{getTotalCartItems()}</div>
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
