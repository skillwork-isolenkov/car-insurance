import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import * as HiIcons from "react-icons/hi";

const Insurance = () => {
    return (
        <div className="insurance">
            <h2>Insurance and investing for your many ideas</h2>
            <p>We've been protecting people, businesses and futures for more than 90 years.</p>
            <div className="boxes">
                <div className="box">
                    <BsIcons.BsFillPeopleFill id="icon" />
                    <h4>For you and your family</h4>
                    <p>We protect vehicles, property, pets and events.</p>
                    <button>Read More</button>
                </div>
                <div className="box">
                    <FcIcons.FcIphone id="icon" />
                    <h4>For your business</h4>
                    <p>We protect businesses and employees, as well as company property and vehicles.</p>
                    <button>Read More</button>
                </div>
                <div className="box">
                    <HiIcons.HiLightBulb id="icon" />
                    <h4>For your future</h4>
                    <p>We protect investments, retirements and financial dreams.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Insurance;