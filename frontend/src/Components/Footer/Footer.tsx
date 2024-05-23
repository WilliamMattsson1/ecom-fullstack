import './Footer.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
    faPinterestP,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons'

import useScroll from '../../Context/useScroll'

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    const { scrollToTop } = useScroll()
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-socials">
                <FontAwesomeIcon
                    className="footer-socials-icon"
                    icon={faInstagram}
                />
                <FontAwesomeIcon
                    className="footer-socials-icon"
                    icon={faFacebook}
                />
                <FontAwesomeIcon
                    className="footer-socials-icon"
                    icon={faPinterestP}
                />
                <FontAwesomeIcon
                    className="footer-socials-icon"
                    icon={faXTwitter}
                />
            </div>
            <ul className="footer-links">
                <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) =>
                            isActive ? 'footer-link active' : 'footer-link'
                        }
                        to={'/'}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) =>
                            isActive ? 'footer-link active' : 'footer-link'
                        }
                        to={'/products'}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) =>
                            isActive ? 'footer-link active' : 'footer-link'
                        }
                        to={'/about'}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={scrollToTop}
                        className={({ isActive }) =>
                            isActive ? 'footer-link active' : 'footer-link'
                        }
                        to={'/contact'}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ {getCurrentYear()} - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
