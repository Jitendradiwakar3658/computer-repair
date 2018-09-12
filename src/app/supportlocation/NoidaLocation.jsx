import React from 'react';
import { Link } from "react-router-dom";

export class NoidaLocation extends React.Component {
    render() {
        return (
            <div>
                 <section id="services">
                    <div className="container"> <header className="section-header">
                        <h3>Dell Laptop Service Center in Noida</h3>
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
                                <p>The Dell Laptop Service Center in Noida provides the low cost service as well as on time
                                service. We resolve hardware as well as software issue on time and we are available all time to
                                help you. We provide door step service and on our shop. We have a team to resolve all kind of issues
                                in Laptop and we give discount to our regular customer. We deal in Screen Replacement, Motherboard
                                Replacement, Software Installation, Windows Installation, Keyboard Replacement and other miner fauls.
                                We repair laptop in various place in Ghaziabad. We have agile team to accomplish our goal on your 
                                door and we give you pain free service and transparnt fair.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <h5>Door-step Locations</h5>
                                <ul className="location">
                                    <li><Link to="/noida-sector-2" >Noida Sector 2</Link></li>
                                    <li><Link to="/noida-sector-3" >Noida Sector 3</Link></li>
                                    <li><Link to="/noida-sector-4" >Noida Sector 4</Link></li>
                                    <li><Link to="/noida-sector-10" >Noida Sector 10</Link></li>
                                    <li><Link to="/noida-sector-11" >Noida Sector 11</Link></li>
                                    <li><Link to="/noida-sector-15" >Noida Sector 15</Link></li>
                                    <li><Link to="/noida-sector-16" >Noida Sector 16</Link></li>
                                    <li><Link to="/noida-sector-18" >Noida Sector 18</Link></li>
                                    <li><Link to="/noida-sector-26" >Noida Sector 26</Link></li>
                                    <li><Link to="/noida-sector-28" >Noida Sector 28</Link></li>
                                    <li><Link to="/noida-sector-37" >Noida Sector 37</Link></li>
                                    <li><Link to="/noida-sector-58" >Noida Sector 58</Link></li>
                                    <li><Link to="/noida-sector-62" >Noida Sector 62</Link></li>
                                    <li><Link to="/noida-sector-63" >Noida Sector 63</Link></li>
                                    <li><Link to="/noida-sector-64" >Noida Sector 64</Link></li>
                                    <li><Link to="/noida-sector-71" >Noida Sector 71</Link></li>
                                </ul>
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
        );
    }
}
export default NoidaLocation;