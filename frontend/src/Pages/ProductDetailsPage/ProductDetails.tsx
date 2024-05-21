import './ProductDetails.css'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()

    return (
        <div>
            <h1>Product Details - {params.id}</h1>
        </div>
    )
}

export default ProductDetails
