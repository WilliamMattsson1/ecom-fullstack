import { useState } from 'react'
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import ProductItem from '../../Components/ProductItem/ProductItem'
import './GenderProducts.css'
import useProducts from '../../Context/useProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface GenderProductsProps {
    gender: string
}

const GenderProducts = (props: GenderProductsProps) => {
    const { allProducts } = useProducts()

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [category, setCategory] = useState<string>('all')
    const [sortOrder, setSortOrder] = useState<string>('none')

    /* Get array with the right gender */
    const genderProducts = allProducts.filter(
        (product) => product.gender === props.gender
    )

    /* Filter by search term */
    const searchedProducts = genderProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    /* Filter by category */
    const filteredProducts =
        category === 'all'
            ? searchedProducts
            : searchedProducts.filter(
                  (product) => product.category === category
              )

    /* Sort products */
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'price-asc') {
            return a.price - b.price
        } else if (sortOrder === 'price-desc') {
            return b.price - a.price
        } else {
            return 0 // No sorting
        }
    })

    return (
        <>
            <Navbar />
            <OfferBanner />
            <BreadCrumbs />
            <div className="gender-products-container">
                <h1 className="gender-products-title">
                    All products for {props.gender}
                </h1>

                <hr className="hr-1" />
                <div className="products-sorting">
                    <div className="search-bar">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="search-icon"
                        />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                        />
                    </div>
                    <div className="sorting-dropdowns">
                        <label>
                            Category:
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="tops">Tops</option>
                                <option value="bottoms">Bottoms</option>
                            </select>
                        </label>
                        <label>
                            Sort by:
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="none">None</option>
                                <option value="price-asc">
                                    $: Low to High
                                </option>
                                <option value="price-desc">
                                    $: High to Low
                                </option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="gender-products">
                    {sortedProducts.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                gender={product.gender}
                                category={product.category}
                                image={product.image}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GenderProducts
