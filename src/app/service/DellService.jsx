import React from 'react';
export class DellService extends React.Component {
    render() {
        return (<div>
            <section id="services">
                <div className="container">

                    <header className="section-header ">
                        <h3>Dell Service Center</h3>
                        <p>
                            <strong>Axis Computer</strong> provides the best service in all kind of Laptops like Dell,
                                we provide all kind of service for <strong>Dell Laptop </strong> like Screen Replacement, MotherBoard
                        Replacement, Software Installation, Windows Installation, KeyBoard Replacement and many more.
                        </p>
                    </header>
                </div>
            </section>
            <div id="mySidenav">
                <a to="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                } className="contact"  alt=""/><p className="contacttext">contact us</p></a>
            </div>
        </div>
        );
    }
}
export default DellService;