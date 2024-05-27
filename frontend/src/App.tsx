import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import TrendingProducts from './Components/TrendingProducts/TrendingProducts'
import InfoBox from './Components/InfoBox/InfoBox'
import NewsletterSub from './Components/NewsletterSub/NewsletterSub'

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrendingProducts />
            <InfoBox />
            <NewsletterSub />
            <Footer />
        </>
    )
}

export default App
