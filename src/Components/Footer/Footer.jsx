import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
    const [message, setMessage] = useState('');

    const footerBtn = () => {
        let input = document.querySelector('.input-icon input');

        let footMsg = document.querySelector('.footer-msg');

        if (input.value !== '') {
            setMessage('Congratulations, you have subscribed!');
            footMsg.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required field!');
            footMsg.style.color = "red";
        }
    }
    return (
        <div className="footer">
            <div className="input-elements">
                <h2>Stay Informed Our Updates</h2>
                <div className="input-icon">
                    <input type="text" placeholder="Enter your email" />
                    <GoIcons.GoMail id="input-email" onClick={footerBtn} />
                </div>
            </div>
            <span className="footer-msg">{message}</span>

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
                        <a href="https://www.facebook.com/profile.php?id=100044530309410"><FaIcons.FaFacebook /></a>
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