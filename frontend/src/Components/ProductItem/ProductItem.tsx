import './ProductItem.css'
import { Link } from 'react-router-dom'

interface Product {
    id: number
    name: string
    price: number
    image: string
}

const ProductItem = (props: Product) => {
    return (
        <div className="product">
            <Link className="product-link" to={`/products/${props.id}`}>
                <img src={props.image} alt="product image" />
                <h2>{props.name}</h2>
                <p>{props.price} kr</p>
            </Link>
        </div>
    )
}

export default ProductItem