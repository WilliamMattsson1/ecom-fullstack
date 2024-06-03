import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <>
                <div className="about-us-container">
                    <h1 className="about-us-heading">About us</h1>
                    <div className="about-us-content">
                        <p>
                            Welcome to our online clothing store! We are
                            passionate about offering high-quality apparel and
                            an exceptional shopping experience for our
                            customers.
                        </p>
                        <hr className="hr-1" />
                    </div>
                    <div className="about-boxes-container">
                        <div className="about-box">
                            <h2>12</h2>
                            <p>Stores</p>
                        </div>
                        <div className="about-box">
                            <h2>300 000</h2>
                            <p>Customers</p>
                        </div>
                        <div className="about-box">
                            <h2>100%</h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="about-second-container">
                    <div className="about-img-container">
                        <img
                            src="https://images.unsplash.com/photo-1625698311031-f0dd15be5144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8Mg%3D%3D"
                            alt="store image"
                        />
                    </div>
                    <div className="about-second-right">
                        <h2>Our Story</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Culpa, consequuntur impedit quam itaque
                            dolorem q
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Culpa, consequuntur impedit quam itaque
                            dolorem quaerat vel tempore blanditiis inventore.
                            Est la
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Culpa, consequuntur impedit quam itaque
                            dolorem qu
                        </p>
                    </div>
                </div>
            </>
            <Footer />
        </div>
    )
}

export default AboutPage
