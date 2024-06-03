import './OfferBanner.css'
import { useState, useEffect } from 'react'

const OfferBanner = () => {
    const messages = [
        'FREE SHIPPING ON ORDERS OVER $100',
        'GET 10% STUDENT DISCOUNT'
    ]

    const [currentMessage, setCurrentMessage] = useState(0)
    const [fade, setFade] = useState(true)

    /* Changes messages every 5s */
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setCurrentMessage(
                    (prevIndex) => (prevIndex + 1) % messages.length
                )
                setFade(true)
            }, 500)
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [messages.length])
    return (
        <div className="offer-banner">
            <p className={`offer-message ${fade ? 'fade-in' : 'fade-out'}`}>
                {messages[currentMessage]}
            </p>
        </div>
    )
}

export default OfferBanner
