import './AdminAddForm.css'
import { useState } from 'react'
import useProducts from '../../Context/useProducts'

const AdminAddForm = () => {
    const { fetchAllProducts } = useProducts()

    interface FormData {
        productName: string
        productPrice: string | number
        productCategory: 'tops' | 'bottoms'
        productGender: 'men' | 'woman'
        productImage: string
    }

    const [formData, setFormData] = useState<FormData>({
        productName: '',
        productPrice: '',
        productCategory: 'tops',
        productGender: 'men',
        productImage: ''
    })

    const handleInputChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Formdata:', formData)
        const formDataWithNumberPrice = {
            ...formData,
            productPrice: Number(formData.productPrice)
        }

        console.log('Formdata: Number:', formDataWithNumberPrice)

        try {
            const response = await fetch('/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)

            fetchAllProducts()

            setFormData({
                productName: '',
                productPrice: '',
                productCategory: 'tops',
                productGender: 'men',
                productImage: ''
            })
        } catch (error) {
            console.error('Error adding product:', error)
        }
    }
    return (
        <div className="add-product-form">
            <div className="add-product-form">
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="admin-input-container">
                        <label>
                            Product Name
                            <input
                                value={formData.productName}
                                placeholder="Gucci Slides"
                                type="text"
                                onChange={handleInputChange}
                                name="productName"
                                required
                            />
                        </label>
                    </div>

                    <div className="admin-input-container">
                        <label>
                            Price
                            <input
                                value={formData.productPrice}
                                placeholder="1000"
                                type="number"
                                onChange={handleInputChange}
                                name="productPrice"
                                required
                            />
                        </label>
                    </div>

                    <div className="admin-select-container">
                        <div className="admin-select">
                            <label>
                                Category
                                <select
                                    value={formData.productCategory}
                                    onChange={handleInputChange}
                                    name="productCategory"
                                    required
                                >
                                    <option value="tops">Tops</option>
                                    <option value="bottoms">Bottoms</option>
                                </select>
                            </label>
                        </div>
                        <div className="admin-select">
                            <label>
                                Gender
                                <select
                                    value={formData.productGender}
                                    onChange={handleInputChange}
                                    name="productGender"
                                    required
                                >
                                    <option value="men">Men</option>
                                    <option value="woman">Woman</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="admin-input-container">
                        <label>
                            Product Image
                            <input
                                value={formData.productImage}
                                placeholder="https://placehold.co/600x400/EEE/31343C"
                                type="text"
                                onChange={handleInputChange}
                                name="productImage"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AdminAddForm
