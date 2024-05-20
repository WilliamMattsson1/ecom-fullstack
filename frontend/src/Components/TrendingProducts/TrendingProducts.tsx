import './TrendingProducts.css'

const TrendingProducts = () => {
    return (
        <div className="trending-products-container">
            <h1 className="title">Trending Products</h1>
            <p className="trending-products-p">
                Explore our latest and most popular items
            </p>
            <hr className="hr-1" />
            <div className="trending-products">
                <div className="product">
                    <img
                        src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product"
                    />
                    <h2>Product 1</h2>
                    <p>$100</p>
                </div>
                <div className="product">
                    <img
                        src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product"
                    />
                    <h2>Product 2</h2>
                    <p>$200</p>
                </div>
                <div className="product">
                    <img
                        src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product"
                    />
                    <h2>Product 3</h2>
                    <p>$300</p>
                </div>
                <div className="product">
                    <img
                        src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product"
                    />
                    <h2>Product 3</h2>
                    <p>$300</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
