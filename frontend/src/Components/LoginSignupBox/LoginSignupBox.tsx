import './LoginSignupBox.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginSignupBox = () => {
    const [loginSignupText, setLoginSignupText] = useState<string>('Sign up')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="login-signup-box-container">
            <form onSubmit={handleSubmit} action="">
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
                                onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                    <button type="submit" className="login-signup-btn">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignupBox
