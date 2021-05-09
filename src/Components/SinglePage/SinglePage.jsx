import Home from '../Home/Home'
import Insurance from '../Insurance/Insurance'
import Finding from '../Finding/Finding'
import BestCompanies from '../BestCompanies/BestCompanies'
import Contact from '../Contact/Contact'
import Faq from '../Faq/Faq'

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Insurance />
            <Finding />
            <BestCompanies />
            <Faq />
            <Contact />
        </div>
    );
}

export default SinglePage;