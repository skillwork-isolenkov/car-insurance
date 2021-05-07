import { useState } from "react";
import { Link } from "react-router-dom";

const Tour = () => {
    const [message, setMessage] = useState('');

    const tourButton = (e) => {
        e.preventDefault();

        let name = document.querySelector('#name-tour');
        let mobile = document.querySelector('#mobile-tour');
        let mail = document.querySelector('#mail-tour');
        let city = document.querySelector('#city-tour');

        let msg = document.querySelector('.tour-msg');

        if (name.value !== '' && mobile.value !== '' && mail.value !== '' && city.value !== '') {
            setMessage('Your car is ready!');
            msg.style.color = '#08bd08';
        } else {
            setMessage('Please fill in required fields!');
            msg.style.color = 'red';
        }
    }
    return (
        <div className="tour">
            <div className="tour-text">
                <h1>Be Insured ready</h1>
                <p>
                    Praesent iaculis ligula eu nulla portittor, eget imperdiet odio pulvinar. Donec massa
                    arcu fermentum ac urna.
                </p>
                <Link to="/" id="tour-btn">Take A Tour</Link>
            </div>

            <div className="tour-quote">
                <h4>Get A Quote</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus earchitecto betae vitaee.
                </p>
                <form action="/" className="tour-form">
                    <input type="text" placeholder="Your Name*" id="name-tour" />
                    <input type="number" placeholder="Mobile*" id="mobile-tour" />
                    <input type="email" placeholder="E-mail*" id="mail-tour" />
                    <input type="text" placeholder="City*" id="city-tour" />
                    <input type="text" placeholder="Zip Code" />
                    <button onClick={tourButton}>Get Quote</button>
                </form>
                <span className="tour-msg">{message}</span>
            </div>

        </div>
    );
}

export default Tour;