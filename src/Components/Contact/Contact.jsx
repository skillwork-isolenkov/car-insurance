const Contact = () => {
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
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter a valid email adress" />
                <textarea placeholder="Enter your message" rows="4" cols="50"></textarea>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact;