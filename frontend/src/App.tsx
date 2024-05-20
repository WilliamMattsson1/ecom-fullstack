import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import TrendingProducts from './Components/TrendingProducts/TrendingProducts'

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
            <HeroSection />
            <TrendingProducts />
            <Footer />

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
