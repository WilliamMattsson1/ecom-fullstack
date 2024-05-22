import './NewsletterSub.css'
import { useState } from 'react'

const NewsletterSub = () => {
    const [email, setEmail] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('Email:', email)

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            if (!response.ok) {
                console.log('Failed to subscribe to newsletter')
            }

            const data = await response.json()
            console.log('Subscribtion successful:', data)
            setEmail('')
        } catch (error) {
            console.error('Error subscribing to newsletter:', error)
        }
    }
    return (
        <>
            <h1 className="title">Stay Up To Date</h1>
            <p className="newsletter-p">Don't miss out on new releases</p>
            <hr className="hr-1" />

            <div className="newsletter-box">
                <h3>Subscribe to our newsletter</h3>
                <p>Get the latest news and the best offers</p>

                <form className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        onChange={handleChange}
                        value={email}
                        name="email"
                    />
                    <button
                        type="submit"
                        onClick={handleClick}
                        className="newsletter-btn"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </>
    )
}

export default NewsletterSub
