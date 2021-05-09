import About from "../About/About"
import Benefits from "../Benefits/Benefits";
import Services from "../Services/Services";

const AboutPage = () => {
    return (
        <div className="about-page">
            <About />
            <Services />
            <Benefits />
        </div>
    );
}

export default AboutPage;