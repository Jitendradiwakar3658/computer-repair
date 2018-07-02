import React from 'react';
export class LenevoService extends React.Component {
    render() {
        return (
            <div>
                <section id="services">
                    <div className="container">

                        <header className="section-header">
                            <h3>Lenovo Service center</h3>
                            <p>
                                <strong>Axis Computer</strong> provides the best service in all kind of Laptops like Lenovo,
                            we provide all kind of service for <strong>Lenovo Laptop </strong> like Screen Replacement, MotherBoard
                            Replacement, Software Installation, Windows Installation, KeyBoard Replacement and many more.
                    </p>
                        </header>
                    </div>
                </section>
                <div id="mySidenav">
                    <a to="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                    } className="contact"  alt=""/><p className="contacttext">call us</p></a>
                </div>
            </div>
        );
    }
}
export default LenevoService;