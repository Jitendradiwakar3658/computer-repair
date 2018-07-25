import React from "react"
import "../styles/style.css"
import { Link } from "react-router-dom"
class About extends React.Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>About Us</h3>
              <p><strong>Dell Laptop Service Center in Ghaziabad</strong> provides Service and Repair in all kind of Dell Laptop. We provide
              <strong> home services</strong> as well as our <strong>own shop</strong>. We have 10+ years of experience to repair laptops like <strong>Dell, Hp,
                  Lenovo</strong> etc. We give you pain-free service in Motherboard replacement, Battery replacement, Software
                installation, Windows installation, Hinges replacement, Keyboard replacement, Screen replacement etc.
                 We have the agile team to handle all kind of fault in Dell Laptop and remote support to give you pain-free
                  service. We are transparent for everything and charge the fair amount of Laptop service and give you the
                     discount as per laptop condition. We guarantee the satisfaction service to our customer.</p>
            </header>
            <div className="row about-cols">
              <div className="col-md-4 wow fadeInUp">
                <div className="about-col">
                  <div className="img">
                    <img
                      src={require("../img/about-mission.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fa fa-tachometer" />
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Mission</a></h2>
                  <p>
                    We believe in providing a service that is fair and reliable. We believe in upfront and transparent fair and
                    not charging for a service that doesn’t solve our customer’s problems, and by taking responsibility
                    when we don’t perform our service as promised.
                  </p>
                </div>
              </div>

              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="about-col">
                  <div className="img">
                    <img
                      src={require("../img/about-plan.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fa fa-list" />
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Plan</a></h2>
                  <p>
                    We ease the pain of technology frustrations with our knowledgeable and skilled technicians.
                       We take care of issues, faults and providing technology solutions around the clock. To improve it,
                        we give you the best service in Ghaziabad.
                  </p>
                </div>
              </div>

              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="about-col">
                  <div className="img">
                    <img
                      src={require("../img/about-vision.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Vision</a></h2>
                  <p>
                    It’s our goal to be a top-most provider of computer support for businesses as well as home users.
                      We believe in achieving this with prompt service at an affordable cost. Dell Laptop service center is dedicated to
                       providing the highest standards in the computer.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-3"></div>
              <div id="aboutservice" className="col-md-3">
                <div className="aboutservice-top">
                  <div >
                    <div className=" aboutservice-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li>
                          <i className="ion-ios-arrow-right" /> <Link to="dell-laptop-service">Dell Service Center</Link>
                        </li>
                        <li>
                          <i className="ion-ios-arrow-right" /> <Link to="lenevo-laptop-service">Lenovo Service Center</Link>
                        </li>
                        <li>
                          <i className="ion-ios-arrow-right" /> <Link to="hp-laptop-service">Hp Service Center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        <div id="mySidenav">
          <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
          } className="contact" alt="" /><p className="contacttext">call us</p></a>
        </div>
      </div>
    )
  }
}
export default About
