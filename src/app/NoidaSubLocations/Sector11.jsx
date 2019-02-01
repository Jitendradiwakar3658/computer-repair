import React from 'react';
import {Link} from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
class Sector11 extends React.Component{
    render() {
        return(
            <div>
                 <section id="services">
                    <div className="container"> <header className="section-header">
                        <h3>Dell Laptop Service Center in Noida Sector 11</h3>
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
                                <p><b>The Dell Laptop Service Center in Noida Sector 11</b> offers its clients assistance and service with all software and hardware in the
                                     Noida. We offer our service <b>OnSite</b> and <b>Remotely</b>. We specialize in Screen Replacement, Motherboard Replacement, Software
                                      Installation, Windows Installation, Keyboard Replacement and other minor faults. We are a reliable service centre for Dell laptops 
                                      and we are here to provide you with pain free service with transparent fair.
                                      <br/><br/>
                                <p ><b>Hunting for Dell Laptop Service Center in Noida sector 11 ? </b><br/><br/>
                                Hunting for a good Dell Laptop Service Center in Noida Sector 11 ends here. We pride ourselves on quality customer service and cost that we are better than our competition. We give 
                                you instant service and are ready to help you at any time. Repairing is our passion and we believe in us to give you the best service in the Noida 
                                Sector 11. We are totally transparent and we work on Post warrant laptops. We have over 10+ years experience in repairing laptops and
                                 our responses have always been good.
                                
                                <br/><br/><p>
                                <b>Dell Laptop Onsite Support in Noida Sector 11</b>
                                
                                <br/><br/>
                                    <p>Your laptop has become essential for day to day life, it is being used for your work, fun or to connect daily and it easies much work
                                 and life so much easier from your home or office. Today everything is being operated by a laptop or Computer. Has your Laptop broken
                                  down, been taken over by a virus or you accidentally wiped out all of your important data making you are unable to do your work,
                                   talk to your colleagues, loved ones or friendslose all your treasured memories. Then just call us, we are ready to give instant 
                                   service. We have highly skilled technicians who are happy to help you to repair your Laptop and Computer now.
                                   
                                      <br/><br/><Link to="/noida-sector-11">Dell Laptop Onsite Support in Noida Sector 11</Link> eases your work with fast on time and instant service and we are completely transparent in everything we do.  
                                      Support from <b>Dell laptop Service Centre in Noida Sector 11</b> is helpful when you get stuck
                                      with your Laptop and not know what to do with it. We help our customer either Onsite and from our store. We find the solution within time with fast service for you.
                                    </p>
                                </p>
                                
                                </p>
                                
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
                <ScrollUpButton ShowAtPosition={150} className="scrollup" style={{ background: '#18d26e' }} />
                <div id="mySidenav">
                    <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                    } className="contact" alt="" /><p className="contacttext">call us</p></a>
                </div>
            </div>
        )
    };
}
export default Sector11;