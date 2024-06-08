import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ConfirmationPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

interface Order {
    id: number
    user_id: number
    total_amount: number
    discount: number
}

interface OrderItem {
    id: number
    product_id: number
    quantity: number
    price: number
}

const ConfirmationPage = () => {
    const { orderId } = useParams<{ orderId: string }>()
    const [orderData, setOrderData] = useState<{
        order: Order
        orderItems: OrderItem[]
    } | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch(`/orderdata/${orderId}`)
                const data = await response.json()
                setOrderData(data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching order data:', error)
                setIsLoading(false)
            }
        }

        fetchOrderData()
    }, [orderId])

    if (isLoading) {
        return <div className="confirmation-page">Loading...</div>
    }

    if (!orderData) {
        return <div className="confirmation-page">Order not found</div>
    }

    const { order, orderItems } = orderData

    return (
        <>
            <Navbar />
            <div className="confirmation-page">
                <h2>Thank you for shopping with us!</h2>
                <p>Your order has been successfully placed.</p>
                <p>An order confirmation will be sent to your email shortly.</p>
                <p>Here are your order details:</p>

                <div className="order-details">
                    <p>
                        <strong>Order ID:</strong> {order.id}
                    </p>

                    <p>
                        <strong>Total Amount:</strong> $
                        {order.total_amount.toFixed(2)}
                    </p>
                </div>

                <div className="order-items">
                    <h3>Order Items:</h3>
                    <ul>
                        {orderItems.map((item: OrderItem) => (
                            <li key={item.id}>
                                <strong>Product ID: </strong> {item.product_id},
                                <strong>Quantity: </strong>
                                {item.quantity}, <strong>Price: </strong>$
                                {item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="btn-container">
                    <Link to={'/'}>
                        <button className="btn">Continue Shopping</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmationPage
