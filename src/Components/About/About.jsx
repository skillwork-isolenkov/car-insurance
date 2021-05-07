import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <iframe title="Car Insurance Video" width="500" height="400" src="https://www.youtube.com/embed/KHe6ZDH5mvY"></iframe>
            <div className="about-company">
                <h1>
                    Know About
                    <br />
                    Company
                </h1>
                <p>
                    Donec volutpat enim at interdum pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec sodales mauris pretium scelerisque lobortis. Aenean venenatis suscipit vehicula.
                    Phasellus condimentum laoreet nibh at consectetur. Suspendisse potenti mauris pretium. Cras sollcitudin lorem risus,
                    sed ultrices odio aliquam at. Mauris posuere diam at enim malesuada, ac malesuada erat.
                </p>
                <Link to="/" id="about-btn">Learn More</Link>
            </div>
        </div>
    );
}

export default About;