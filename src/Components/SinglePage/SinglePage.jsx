import Home from '../Home/Home'
import Insurance from '../Insurance/Insurance'
import Finding from '../Finding/Finding'
import BestCompanies from '../BestCompanies/BestCompanies'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Insurance />
            <Finding />
            <BestCompanies />
            <Contact />
            <Footer />
        </div>
    );
}

export default SinglePage;