import About from "../About/About"
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer"
import Services from "../Services/Services";

const AboutPage = () => {
    return (
        <div className="about-page">
            <About />
            <Services />
            <Benefits />
            <Footer />
        </div>
    );
}

export default AboutPage;