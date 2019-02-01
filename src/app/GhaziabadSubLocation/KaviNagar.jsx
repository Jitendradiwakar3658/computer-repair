import React from 'react';
import {Link} from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
class KaviNagar extends React.Component{
    render() {
        return(
            <div>
                 <section id="services">
                    <div className="container"> <header className="section-header">
                        <h3>Dell Laptop Service Center in Kavi Nagar Ghaziabad</h3>
                        <div className="row">
                            <div className="col-md-9">
                            <p><b>The Dell Laptop Service Center in Ghaziabad</b> offers its clients service and assistance with all software and hardware in the
                            Ghaziabad. We offer our service <b>OnSite</b> and <b>Remotely</b>. We specialize in Screen Motherboard Replacement, Replacement, Software
                                      Installation,  Keyboard Replacement Windows Installation, and other minor faults. We are a reliable service centre for Dell laptops 
                                      and we are here to provide you with pain free service with transparent fair and on time reparing service.
                                      <br/><br/>
                                <p>
                                <p>
                                <b>Dell Laptop Onsite Support in Ghaziabad</b>
                                
                                <br/><br/>
                                    <p>Your laptop has become essential for day to day life, it is being helped for your work, fun or to connect daily and it easies much work
                                 and life so much easier from your home or office. Today everything is being operated by a laptop or Computer. Has your Laptop broken
                                  down, been taken over by a virus or you accidentally wiped out all of your important data making you are unable to do your work,
                                   talk to your colleagues, friends lose or loved ones all your treasured memories. Then just call us, we are ready to give you instant 
                                   service. We have highly skilled technicians who are happy to help you to repair your Laptop and Computer now.

                                   <br/><br/><b>Hunting for Dell Laptop Service Center in Ghaziabad ? </b><br/><br/>
                                Hunting for a good Dell Laptop Service Center in Ghaziabad finishes here. We pride ourselves on quality customer service and cost that we are better than our competition. We give 
                                you fast service and are ready to help you at any time when you cant help it. Repairing the laptop is our passion and we believe in us to give you the best quality service in the Ghaziabad 
                                . We are totally transparent and we work on Post warrant laptops. We have over 10+ years experience in repairing laptops and
                                 our responses have always been good to our essential client.
                                   
                                      <br/><br/><Link to="/noida-Location">Dell Laptop Onsite Support in Ghaziabad</Link> makes  your work easy with fast, on time and instant service and we are completely transparent in everything what we do.  
                                      Support from <b>Dell laptop Service Centre in Ghaziabad</b> is helpful when you get stuck
                                      with your Laptop and not know what to do with it. We assist our customer either Onsite and from our store. We find the solution within time with fast service for you.
                                    </p>
                                </p>
                                
                                </p>
                                
                                </p>
                            </div>
                            <div className="col-md-3">
                                <h5>Door-step Locations</h5>
                                <ul className="location">
                                    <li><Link to="/crossing-republic" >Crossing Republic</Link></li>
                                    <li><Link to="/govind-puram-ghaziabad" >Govind Puram Ghaziabad</Link></li>
                                    <li><Link to="/hindon-area-ghaziabad" >Hondon Area Ghaziabad</Link></li>
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
        )
    };
}
export default KaviNagar;