import './LoginSignupBox.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faEnvelope,
    faLock,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons'

const LoginSignupBox = () => {
    const [loginSignupText, setLoginSignupText] = useState<string>('Login')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (loginSignupText === 'Sign up') {
            signupUser()
        } else {
            loginUser()
        }
    }

    const signupUser = async () => {
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.status === 401) {
                setLoginError(data.message)
            }
            console.log(data)

            if (response.ok) {
                setLoginSignupText('Login')
                console.log('User signed up (from frontend)')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async () => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.status !== 201 && response.status !== 200) {
                setLoginError(data.message)
            }
            console.log(data)

            if (response.ok) {
                localStorage.setItem('token', data.token)
                window.location.href = '/'
                console.log('User logged in (from frontend)')
            }
        } catch (error) {
            console.log(error)
        }
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
                                required
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
                            required
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
                            required
                            onChange={handleInputChange}
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                {loginError && (
                    <div className="login-error-message">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <p>{loginError}</p>
                    </div>
                )}

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
