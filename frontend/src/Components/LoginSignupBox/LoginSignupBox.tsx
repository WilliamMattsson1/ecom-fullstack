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
                    {loginSignupText === 'Sign up' ? (
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
                    ) : (
                        <></>
                    )}

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
                    {loginSignupText === 'Sign up' ? (
                        <p>
                            Already have an account?{' '}
                            <span
                                onClick={() => {
                                    setLoginSignupText('Login')
                                }}
                            >
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{' '}
                            <span
                                onClick={() => {
                                    setLoginSignupText('Sign up')
                                }}
                            >
                                Sign up here
                            </span>
                        </p>
                    )}
                </div>
                <div className="login-signup-btn-container">
                    <button className="login-signup-btn">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignupBox
