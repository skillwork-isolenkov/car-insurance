import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import * as GoIcons from 'react-icons/go';

const Services = () => {
    return (
        <div className="services">
            <h1>Take More Services</h1>
            <p>
                Tonsequat in erat ut, congue bibendum nulla. Suspendisse id pharetra
                <br />
                lacus, et hendrerit mi. Praesent at vestibulum tortor. Praesent
                <br />
                condimentum efficur massa pharetra dolor sed.
            </p>

            <div className="boxes-services">
                <div className="top-boxes">
                    <div className="box-services">
                        <AiIcons.AiOutlineShopping id="box-icon" />
                        <div className="box-text">
                            <h4>Online Shopping</h4>
                            <p>
                                Etiam neque tortor, bilbendum id maximus vitae, tincidunt id libero. Morbi ac leo
                                vitae saplen rutrum sempe.
                            </p>
                        </div>
                    </div>
                    <div className="box-services">
                        <FaIcons.FaMusic id="box-icon" />
                        <div className="box-text">
                            <h4>Multimedia Archives</h4>
                            <p>
                                Vestibulum accumsan est malesuada sem aucut, eu aliqua nisl omare.
                                Aliquam dapibus lectus.
                            </p>
                        </div>
                    </div>
                    <div className="box-services">
                        <AiIcons.AiFillSetting id="box-icon" />
                        <div className="box-text">
                            <h4>Quick Settings</h4>
                            <p>
                                Fusce ullamcorper turpis at eros blandit, at laculis eros bibendum.
                                In diam erat, gravida sit amet aliquet vitae.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bottom-boxes">
                    <div className="box-services">
                        <TiIcons.TiWeatherShower id="box-icon" />
                        <div className="box-text">
                            <h4>Global Weather</h4>
                            <p>
                                Mauris aliquam neque risus, eget fendentum ex posuere et. Nam Interdum
                                odio ante, nec sollicitudum.
                            </p>
                        </div>
                    </div>
                    <div className="box-services">
                        <GoIcons.GoCalendar id="box-icon" />
                        <div className="box-text">
                            <h4>Personal Planners</h4>
                            <p>
                                Ullamcorpier turpis at eros blandit, at laculis eros bibendum. In mia dia erat
                                gravida sit amet aliuqem vitae.
                            </p>
                        </div>
                    </div>
                    <div className="box-services">
                        <AiIcons.AiOutlineStar id="box-icon" />
                        <div className="box-text">
                            <h4>Your Archivements</h4>
                            <p>
                                Accumsan est malesuada sem actur, eu aliquet nisl ornate. Aliquam dapibus
                                lectus dolor, quies pulvinar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;