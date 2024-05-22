import './ProductItem.css'
import { Link } from 'react-router-dom'

interface Product {
    id: number
    name: string
    price: number
    gender: string
    category: string
    image: string
}

const ProductItem = (props: Product) => {
    return (
        <div className="product">
            <Link
                className="product-link"
                to={`/products/${props.gender}/${props.name}`}
            >
                <img src={props.image} alt="product image" />
                <h2>{props.name}</h2>
                <p>{props.price} kr</p>
            </Link>
        </div>
    )
}

export default ProductItem
