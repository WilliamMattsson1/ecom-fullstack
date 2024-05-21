import './CategorySelection.css'
const CategorySelection = () => {
    return (
        <>
            <h2 className="products-title">Our Products</h2>
            <p className="products-p">We got something for everyone</p>
            <hr className="hr-1" />
            <div className="products-categories">
                <div className="products-category mens-clothing">
                    <div className="category-image">
                        <img
                            src="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8Mg%3D%3D"
                            alt="Mens Clothing"
                        />
                    </div>
                    <div className="category-text">
                        <h3>Mens Clothing</h3>

                        <p>Discover the latest trends in mens fashion.</p>
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="products-category womens-clothing">
                    <div className="category-text">
                        <h3>Womens Clothing</h3>
                        <p>Explore the latest trends in womens fashion.</p>
                        <button>Shop now</button>
                    </div>
                    <div className="category-image">
                        <img
                            src="https://images.unsplash.com/photo-1572112686886-5c0b5bc8dacd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmwlMjBmYXNoaW9ufGVufDB8fDB8fHwy"
                            alt="Womens Clothing"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategorySelection
