import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
export class LenevoService extends React.Component {
    render() {
        return (
            <div>
                <section id="services">
                    <div className="container">

                        <header className="section-header">
                            <h3>Lenovo Laptop Service center</h3>
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
                            Here at our Dell Service Center we aim to provide you with the highest quality, affordable service for you and all
                             your Lenovo laptop needs.
                                    Our Services include: Software Installation, Windows Installation, System and Driver Updates, Anti-Virus,
                                     Screen Replacement, Motherboard
                                    Replacement, Keyboard Replacements and General Computer maintenance.
                         Our friendly expert staff are always more than happy to assist you in any way we can. We are always ready and waiting for your call/email 
                         to help you either at your location or you can come in and see us directly at our shop.
                                {/* We provide the best service in Lenovo Laptops,
                                    We provide all kind of service for Laptop like Screen Replacement, Motherboard
                        Replacement, Software Installation, Windows Installation, Keyboard Replacement and other miner fauls.
                        We are transparent about our fair and give you quality service and assistance. Our expert will always ready
                        to help you on your door either you can visit us. We fix the windows problems while updating windows
                        and software. Get a complete support and repair your system in the affordable price and get the friendly
                         Laptop repair with the door service. */}
                        </p>
                        </header><br/><br/><br/>
                        <div className="col-md-12 ">
                            <h1>Why Choose Us</h1>
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
export default LenevoService;