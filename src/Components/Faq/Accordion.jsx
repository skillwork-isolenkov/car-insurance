import { Data } from './Data';
import * as FiIcons from "react-icons/fi";
import { useState } from 'react';

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <div className="accordion">
            <div className="container">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div className="wrap" onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <FiIcons.FiMinus id="acc-icon" /> : <FiIcons.FiPlus id="acc-icon" />}</span>
                            </div>

                            {clicked === index ? (
                                <div className="dropdown">
                                    <p>{item.answer}</p>
                                </div>
                            ) : null}
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Accordion;