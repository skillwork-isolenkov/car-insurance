import companiesCars from '../images/best-companies/companies.jpg'

const BestCompanies = () => {
    return (
        <div className="best-companies">
            <div className="companies-tags">
                <h1>
                    The Best <span>Insurance</span>
                    <br />
                    Companies for 2021
                </h1>
                <h4>you're in <span>good hands</span></h4>
            </div>

            <div className="companies">
                <div className="companies-text">
                    <h3>
                        The Best Car Insurance
                        <br />
                        Companies for 2021
                    </h3>
                    <p className="underlined">
                        We looked at claims processes, transparency, complaints
                        and more to find and rank the best car insurance companies.
                    </p>
                    <p className="colored">
                        Many or all of the products featured here are from our partners who compensate us.
                        This may influence which products we write about and where and how the product appears on a page.
                        However, this does not influence our evaluations. Our opinions are our own.
                    </p>
                    <p className="normal">
                        The best car insurance companies give their customers more than just coverage they want
                        at a reasonable price — merely good companies can do that. On top of that, the best auto
                        insurance companies provide a customer-first experience from quote to claim, including
                        a headache-free way to manage policies and make payments.
                    </p>
                </div>
                <img src={companiesCars} alt="companies-cars" />
            </div>
        </div>
    );
}

export default BestCompanies;