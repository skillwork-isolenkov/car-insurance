import { useState } from "react";
import * as FaIcons from "react-icons/fa";

const Contact = () => {
    const [message, setMessage] = useState('');

    const buttonClicked = () => {
        let name = document.querySelector('#contact-name');
        let email = document.querySelector('#contact-email');
        let area = document.querySelector('#contact-area');

        let message = document.querySelector('.contact-msg');


        if (name.value !== '' && email.value !== '' && area.value !== '') {
            setMessage('We have received your message, we will contact you soon!');
            message.style.color = "#08bd08";
        } else {
            setMessage('Please fill in required fields!');
            message.style.color = "red";
        }
    }

    return (
        <div className="contact">
            <div className="contact-text">
                <h3>Ready to talk?</h3>
                <h1>Contact Us</h1>
                <p>
                    Massa tempor nec feugiat nisl pretium fusce id velit. Accumsan tortor posuere ac ut.
                    Aenean pharetra magna ac placerat vestibulum lectus. Praesent semper feugiat nibh sed pulvinar.
                    Lorem sed risus ultricies tristique.
            </p>
                <p>
                    Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
                    Amet dictum sit amet justo donec enim diam vulputate. Ut morbi tincidunt augue interdum
                    velit euismod in pellentesque. Volutpat lacus laoreet non curabitur.
            </p>
            </div>

            <div className="contact-form">
                <input type="text" placeholder="Enter your Name*" id="contact-name" />
                <input type="text" placeholder="Enter a valid email adress*" id="contact-email" />
                <textarea placeholder="Enter your message*" rows="4" cols="50" id="contact-area"></textarea>
                <button onClick={buttonClicked}>Submit</button>
                <span className="contact-msg">{message}</span>
                <div className="icons">

                    <a href="https://github.com/IvanSolenkov"><FaIcons.FaGithub id="social" /></a>
                    <a href="https://www.linkedin.com/in/ivan-solenkov-7544211ba/"><FaIcons.FaLinkedin id="social" /></a>
                    <a href="https://www.instagram.com/ivansolenkov99/"><FaIcons.FaInstagram id="social" /></a>

                </div>
            </div>
        </div>
    );
}

export default Contact;