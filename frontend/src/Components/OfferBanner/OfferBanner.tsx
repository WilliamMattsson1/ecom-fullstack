import './OfferBanner.css'
import { useState, useEffect } from 'react'

const OfferBanner = () => {
    const messages = [
        'FREE SHIPPING ON ORDERS OVER $100',
        'GET 10% STUDENT DISCOUNT'
    ]

    const [currentMessage, setCurrentMessage] = useState(0)

    /* Changes messages every 5s */
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMessage((prevIndex) => (prevIndex + 1) % messages.length)
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [messages.length])
    return (
        <div className="offer-banner">
            <p>{messages[currentMessage]}</p>
        </div>
    )
}

export default OfferBanner
