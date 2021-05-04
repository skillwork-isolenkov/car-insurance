import logo1 from '../images/benefits/photo-1.jpg'
import logo2 from '../images/benefits/photo-2.jpg'
import logo3 from '../images/benefits/photo-3.png'

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="benefits-text">
                <h1>Benefits</h1>
                <p>
                    Integer elementum efficur quam et vulpate. Morbi porta, lacus eget consectur cursus,
                    justo purus porttior lacus, sit amet suscipit nibh velit eget lectus. Aenean plarecat
                    ex et lacus pretium condimentum. Maecenas henderit semper sapien. Maecenas lectus mauris,
                    fringilla et odio a, bibendum imperdiet nibh.
                </p>
            </div>

            <div className="benefits-images">
                <img src={logo1} alt="logo1" />
                <img src={logo2} alt="logo2" />
                <img src={logo3} alt="logo3" />
            </div>

        </div>
    );
}

export default Benefits;