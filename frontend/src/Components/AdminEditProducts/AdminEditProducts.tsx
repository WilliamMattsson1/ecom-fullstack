import './AdminEditProducts.css'
import useProducts from '../../Context/useProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

interface Product {
    id: number
    name: string
    price: number
    category: string
    gender: string
    image: string
}

const AdminEditProducts = () => {
    const { allProducts } = useProducts()

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    const deleteProduct = async (productId: number) => {
        try {
            const response = await fetch('/deleteproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId })
            })
            const data = await response.json()

            setProducts(
                products.filter((product: Product) => product.id !== productId)
            )

            console.log(data)
        } catch (error) {
            console.error('Error deleting product:', error)
        }
    }

    return (
        <>
            <h2 className="admin-products-title">All products</h2>
            <div className="admin-products-titles">
                <p>ID</p>
                <p>Image</p>
                <p>Name</p>
                <p>Gender</p>
                <p>Category</p>
                <p>Price</p>
                <div>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            </div>
            <div className="admin-products">
                {products.map((product) => (
                    <div className="admin-product" key={product.id}>
                        <p className="admin-product-id">#{product.id}</p>
                        <div className="admin-product-image-container">
                            <img
                                className="admin-product-image"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <p className="admin-product-name">{product.name}</p>
                        <p className="admin-product-gender">{product.gender}</p>
                        <p className="admin-product-category">
                            {product.category}
                        </p>
                        <p className="admin-product-price">${product.price}</p>
                        <div className="admin-products-icons">
                            <div className="admin-product-edit">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <div
                                className="admin-product-delete"
                                onClick={() => deleteProduct(product.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AdminEditProducts
