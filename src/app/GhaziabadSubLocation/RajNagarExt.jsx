import React from 'react';
class RajNagarExt extends React.Component{
    render() {
        return(
            <div>
                 <section id="services">
                    <div className="container"> <header className="section-header">
                        <h3>Dell Laptop Service Center in Raj Nagar Extension Ghaziabad</h3>
                        <div className="row">
                            <div className="col-md-9">
                                <div>
                                    <div className="portfolio-wrap">
                                        <figure>
                                            {/* <img
                                                src={require("../img/dell-service-center.png")}
                                                className="img-fluid imgs"
                                                alt="dell laptop service" height={150} width={150}
                                            /> */}

                                        </figure>
                                    </div>
                                </div>
                                <p>The Dell Laptop Service Center in Raj Nagar Extension Ghaziabad provides the low cost service as well as on time
                                service. We resolve hardware as well as software issue on time and we are available all time to
                                help you. We provide door step service and on our shop. We have a team to resolve all kind of issues
                                in Laptop and we give discount to our regular customer. We deal in Screen Replacement, Motherboard
                                Replacement, Software Installation, Windows Installation, Keyboard Replacement and other miner fauls.
                                We repair laptop in various place in Ghaziabad. We have agile team to accomplish our goal on your 
                                door and we give you pain free service and transparnt fair.
                                </p>
                            </div>
                        </div>

                    </header>
                    </div>
                </section>
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
                <div id="mySidenav">
                    <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                    } className="contact" alt="" /><p className="contacttext">call us</p></a>
                </div>
            </div>
        )
    };
}
export default RajNagarExt;