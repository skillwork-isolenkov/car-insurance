import Accordion from './Accordion';
import photo from '../images/faq/white-mercedes.png'

const Faq = () => {
    return (
        <div className="faq">
            <h1>Faq</h1>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <Accordion />

            <div className="safe-relaxing">
                <img src={photo} alt="pht" />
                <h2>
                    Safe. Relaxing.
                    <br />
                    Good to ride in.
                    <br />
                    Subtly decorated.
                </h2>
            </div>
        </div>
    );
}

export default Faq;