import Home from '../Home/Home'
import Insurance from '../Insurance/Insurance'
import Finding from '../Finding/Finding'
import BestCompanies from '../BestCompanies/BestCompanies'
import Contact from '../Contact/Contact'

const SinglePage = () => {
    return (
        <div className="single-page">
            <Home />
            <Insurance />
            <Finding />
            <BestCompanies />
            <Contact />
        </div>
    );
}

export default SinglePage;