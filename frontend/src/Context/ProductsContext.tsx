import { createContext, useState, useEffect } from 'react'

interface Product {
    id: number
    name: string
    price: number
    gender: string
    category: string
    image: string
}

interface ProductsContextValue {
    allProducts: Product[]
    fetchAllProducts: () => void
}

const ProductsContext = createContext<ProductsContextValue | undefined>(
    undefined
)

type ProductsContextProps = {
    children: React.ReactNode
}

const ProductsProvider = ({ children }: ProductsContextProps) => {
    const [allProducts, setAllProducts] = useState<Product[]>([])

    const fetchAllProducts = async () => {
        try {
            const response = await fetch('/allproducts')
            const data = await response.json()
            setAllProducts(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const contextValue = { allProducts, fetchAllProducts }
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export type { ProductsContextValue }
export { ProductsProvider, ProductsContext }
