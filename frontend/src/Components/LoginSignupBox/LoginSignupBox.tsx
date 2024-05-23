import './LoginSignupBox.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginSignupBox = () => {
    const [loginSignupText, setLoginSignupText] = useState<string>('Sign up')

    return (
        <div className="login-signup-box-container">
            <form action="">
                <div className="login-signup-header">
                    <div className="login-signup-text">{loginSignupText}</div>
                    <hr className="hr-1" />
                </div>
                <div className="login-signup-inputs">
                    <div className="login-signup-input">
                        <FontAwesomeIcon
                            className="login-signup-icon"
                            icon={faUser}
                        />
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            autoComplete="name"
                        />
                    </div>
                    <div className="login-signup-input">
                        <FontAwesomeIcon
                            className="login-signup-icon"
                            icon={faEnvelope}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="login-signup-input">
                        <FontAwesomeIcon
                            className="login-signup-icon"
                            icon={faLock}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                <div className="login-signup-change">
                    Already have an account? <span>Login here</span>
                </div>
                <div className="login-signup-btn-container">
                    <button className="login-signup-btn">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignupBox
