import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

interface Product {
    id: number
    name: string
    price: number
}

function App() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price} kr</p>
                </div>
            ))}
        </>
    )
}

export default App
