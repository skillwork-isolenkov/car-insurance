import gClass from '../images/finding/g-class.jpg'
import sClass from '../images/finding/s-class.jpg'
import eClass from '../images/finding/e-class.jfif'

const Finding = () => {
    return (
        <div className="finding">
            <div className="finding-text">
                <div className="left">
                    <h1>Finding the best car insurance company for you</h1>
                    <p>
                        Pricing and discounts made up a portion of each insurer’s score,
                        but we know that cost is the top factor for many auto insurance shoppers.
                        Since pricing is based on personal factors including your age, location,
                        vehicle and credit history and gender (in most cases), it’s important to
                        shop around for car insurance quotes.
                </p>

                    <p>
                        If price is the most important factor in your search, comparing car insurance quotes
                        can help you find the cheapest rate. But your shopping experience will also shed light
                        on a company’s customer service standards.
                </p>
                </div>

                <div className="right">
                    <h2>
                        To find the top car insurance companies:
                    </h2>
                    <p>
                        1.Visit your state insurance commissioner’s website to find complaints and other information about
                        companies in your area.
                </p>
                    <p>
                        2.Ask your agent or a customer service representative any questions you have to
                        make sure you’re getting all the coverage you need — and nothing you don’t want.
                    </p>
                    <p>
                        3.Consider smaller insurance companies, too.
                        Small companies offer rates well below large competitors in many locations.
                    </p>
                    <p>
                        4.If you’ve had tickets, DUIs or other violations, be sure to shop three
                        and five years after the incident, when surcharges can drop significantly.
                    </p>
                </div>
            </div>

            <div className="images">
                <img src={gClass} alt="g-class" />
                <img src={sClass} alt="s-class" />
                <img src={eClass} alt="e-class" />
            </div>
        </div>
    );
}

export default Finding;