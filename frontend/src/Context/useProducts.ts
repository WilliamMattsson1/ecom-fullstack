import { useContext } from 'react'
import { ProductsContext, ProductsContextValue } from './ProductsContext'

const useProducts = (): ProductsContextValue => {
    const context = useContext(ProductsContext)
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductsProvider')
    }
    return context
}

export default useProducts
