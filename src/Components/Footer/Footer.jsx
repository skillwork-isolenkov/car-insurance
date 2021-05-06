import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="input-elements">
                <h2>Stay Informed Our Updates</h2>
                <div className="input-icon">
                    <input type="text" placeholder="Enter your email" />
                    <GoIcons.GoMail id="input-email" />
                </div>
            </div>

            <nav className="footer-nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tour">Tour</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ivansolenkov99/"><FaIcons.FaInstagram /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ivan-solenkov-7544211ba/"><FaIcons.FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/IvanSolenkov"><FaIcons.FaGithub /></a>
                    </li>
                </ul>
            </nav>

            <p>© 2021 All rights reserved. Auto Insurance!</p>
        </div>
    );
}

export default Footer;