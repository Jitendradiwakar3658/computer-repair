import React from 'react';
import {Link} from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
class GovindPuram extends React.Component{
    render() {
        return(
            <div>
                 <section id="services">
                    <div className="container"> <header className="section-header">
                        <h3>Dell Laptop Service Center in Govind Puram Ghaziabad</h3>
                        <div className="row">
                        <div className="col-md-9">
                        <p>Have you got a problem or damage in your Dell laptop? Are you looking for an instant and affordable laptop solution? 
                                Your search end here. <b>Dell Laptop Service Center in Govind Puram Ghaziabad</b> offers reasonable and low-cost laptop repair solutions
                                 in Ghaziabad. We have a skilled technician team to handle all kind of laptop repair and parts replacement. Any laptop
                                  problems including display problems, screen damage, white screen, LCD screen replacement, power supply issues,
                                   mouse problems, touch panel etc. have instant solutions at our store. We have got an expert technical team for Dell
                                    laptop problems. Our expert technicians team have good ins and outs to handle multiple complains in a day.
                                    They also provide On-Site and remote solution or phone calls.

                                    Our services are easy and we can handle bulk requirements easily as per our client. That’s why companies 
                                    in Ghaziabad hire us for Dell laptop optimization and servicing. Do not keep your Dell laptop at our site 
                                    for a day or two; take it within an hour or two. We have got all the spare parts available at our site. 
                                    The ease of spare parts and skilled technicians team make us the fastest and efficient Dell Service Center
                                     in Ghaziabad.
                                      <br/><br/>
                                
                                <b>Dell Laptop Repair Center in Govind Puram Ghaziabad</b>
                                
                                <br/><br/>
                                    Laptop and computers are our essential machines for daily work and need proper care and maintenance. People use this gadget
                                         to work easily. Numerous Businesses have welcomed laptops and computers after analyzing their benefits. It saves time and 
                                         efforts to maintain our daily work. Damage or issue in the Dell laptop can ruin your schedule. Dell Laptop Repair Center 
                                         in Ghaziabad is the need the solution for every kind of repair and replacement. Get multiple Dell, Hp, Lenovo repair
                                          solutions at our store. We offer both on-site and store repair services to our customers. We can handle big issues 
                                          easily with our skilled technicians. We are reliable in Ghaziabad for laptop repair. Small business, Big business,
                                           Schools, institutes, and individuals all have praised our laptop repair services in Ghaziabad.

                                   <br/><br/><b>Hunting for Dell Laptop Service Center in Govind Puram Ghaziabad ? </b><br/><br/>
                                Hunting for a good Dell Laptop Service Center in Ghaziabad finishes here. We pride ourselves on quality customer service and cost that we are better than our competition. We give 
                                you fast service and are ready to help you at any time when you cant help it. Repairing the laptop is our passion and we believe in us to give you the best quality service in the Ghaziabad 
                                . We are totally transparent and we work on Post warrant laptops. We have over 10+ years experience in repairing laptops and
                                 our responses have always been good to our essential client.                          
                                </p>
                            </div>
                            <div className="col-md-3">
                                <h5>Door-step Locations</h5>
                                <ul className="location">
                                    <li><Link to="/crossing-republic" >Crossing Republic</Link></li>
                                    <li><Link to="/govind-puram-ghaziabad" >Govind Puram Ghaziabad</Link></li>
                                    <li><Link to="/hindon-area-ghaziabad" >Hindon Area Ghaziabad</Link></li>
                                    <li><Link to="/indira-puram-ghaziabad" >Indirapuram Ghaziabad</Link></li>
                                    <li><Link to="/kaushambi-ghaziabad" >Kaushambi Ghaziabad</Link></li>
                                    <li><Link to="/modi-nagar" >Modi Nagar</Link></li>
                                    <li><Link to="/mohan-nagar-ghaziabad" >Mohan Nagar Ghaziabad</Link></li>
                                    <li><Link to="/ram-prashad-ghaziabad" >Ram Prashad Ghaziabad</Link></li>
                                    <li><Link to="/raj-nagar-ghaziabad" >Raj Nagar Ghaziabad</Link></li>
                                    <li><Link to="/raj-nagar-extension-ghaziabad" >Raj Nagar Extension Ghaziabad</Link></li>
                                    <li><Link to="/sahibabad-ghaziabad" >Sahibabad Ghaziabad</Link></li>
                                    <li><Link to="/sanjay-nagar-ghaziabad" >Sanjay Nagar Ghaziabad</Link></li>
                                    <li><Link to="/shalimar-ghaziabad" >Shalimar Ghaziabad</Link></li>
                                    <li><Link to="/vaishali-ghaziabad" >Vaishali Ghaziabad</Link></li>
                                    <li><Link to="/vasundhara-ghaziabad" >Vasundhara Ghaziabad  </Link></li>
                                </ul>
                            </div>
                        </div>

                    </header>
                    </div>
                </section>
                <ScrollUpButton ShowAtPosition={150} className="scrollup" style={{background: '#18d26e'}}/>
                <div id="mySidenav">
                    <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
                    } className="contact" alt="" /><p className="contacttext">call us</p></a>
                </div>
            </div>
        )};
}
export default GovindPuram;