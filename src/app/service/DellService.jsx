import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
export class DellService extends React.Component {
    render() {
        return (<div>
            <section id="services">
                <div className="container">

                    <header className="section-header ">
                        <h3>Dell Laptop Service Center</h3>
                        <div>
                            <div className="portfolio-wrap">
                                <figure>
                                    <img 
                                        src={require("../img/support-image.png")}
                                        className="img-fluid imgs"
                                        alt="dell laptop service" height={350} width={350}
                                    />

                                </figure>
                            </div>
                        </div>
                        <p>
                            <strong>Dell Laptop Service Center</strong> provides the best service in Dell Laptops,
                                    we provide all kind of service for Laptop like Screen Replacement, Motherboard
                        Replacement, Software Installation, Windows Installation, Keyboard Replacement and other miner fauls.
                        We are transparent about our fair and give you quality service and assistance. Our expert will always ready
                        to help you on your door either you can visit us. We fix the windows problems while updating windows
                        and software. Get a complete support and repair your system in the affordable price and get the friendly
                         Laptop repair with the door service.
                        </p>
                    </header><br/>
                    <div className="col-md-12 allservice">
                        <h1><br/>Why Choose Us</h1>
                        <ul>
                            <li>24*7 Support</li>
                            <li>Home Service</li>
                            <li>Low Cost Service</li>
                            <li>15 Days Warranty</li>
                            <li>Fast Service Provider</li>
                            <li>Expert Team To Provide You Best Service</li>
                            <li>Provide All Kind Of Service In Laptop</li>
                        </ul>
                    </div>
                </div>

            </section>

            <ScrollUpButton ShowAtPosition={150} className="scrollup" style={{ background: '#18d26e' }} />
            <div id="mySidenav">
                <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                } className="contact" alt="" /><p className="contacttext">call us</p></a>
            </div>
        </div>
        );
    }
}
export default DellService;