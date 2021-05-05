const Tour = () => {
    return (
        <div className="tour">
            <div className="tour-text">
                <h1>Be Insured ready</h1>
                <p>
                    Praesent iaculis ligula eu nulla portittor, eget imperdiet odio pulvinar. Donec massa
                    arcu fermentum ac urna.
                </p>
                <button>Take A Tour</button>
            </div>

            <div className="tour-quote">
                <h4>Get A Quote</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus earchitecto betae vitaee.
                </p>
                <form action="/" className="tour-form">
                    <input type="text" placeholder="Your Name*" />
                    <input type="number" placeholder="Mobile*" />
                    <input type="email" placeholder="E-mail*" />
                    <input type="text" placeholder="City*" />
                    <input type="text" placeholder="Zip Code" />
                    <button>Get Quote</button>
                </form>
            </div>

        </div>
    );
}

export default Tour;