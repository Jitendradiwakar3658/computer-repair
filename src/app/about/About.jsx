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
              <p>
                <strong>Axis Computer</strong> was established in Ghaziabad since 2000 and we provide all kind of service
                in Laptop. We provide <strong>home services</strong> as well as our own<strong> shop</strong>. We have 10+ years
                experience to repair laptops like <strong>Dell, Hp, Lenovo, Macbook, Acer, Sony</strong> etc.
                 We deal in Motherboard replacement,
                 Battery replacement, Software installation, Windows installation, Hinges replacement, Keyboard
                 replacement, Screen relacement etc.
              </p>
            </header>
            <div className="row about-cols">
              <div className="col-md-4 wow fadeInUp">
                <div className="about-col">
                  <div className="img">
                    <img
                      src={require("../img/about-mission.jpg")}
                      alt="Image not found"
                      className="img-fluid"
                    />
                    <div className="icon">
                      <svg-icon><src href="svg/si-glyph-bed.svg" /></svg-icon>
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Mission</a></h2>
                  <p>
                    We believe in providing a service that is fair. We believe in upfront and transparent pricing, not charging for a service that doesn’t solve our customer’s problems, and by taking responsibility when we don’t perform our service as promised.
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
                      <i className="ion-ios-list-outline" />
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Plan</a></h2>
                  <p>
                    We are easing the pain of technology frustrations with our knowledgeable and skilled technicians.  We are taking care of issues and providing technology solutions around the clock. To improve it we give you best service in Ghazibad.
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
                      <svg-icon>
                        <src href="sprite.svg#si-glyph-biscuit" />
                      </svg-icon>
                    </div>
                  </div>
                  <h2 className="title"><a href="#">Our Vision</a></h2>
                  <p>
                    It’s our goal to be a top-most provider of computer support for businesses as well as home users. We believe in achieving this with prompt service at a affordable cost. Axis Computer is dedicated in providing the highest standards in computer.
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
        <div id="mySidenav">
          <a href="tel:+918510044642" className="fixedcontact"><img src={require("../img/contact-us-icon.png")
          } className="contact"  alt=""/><p className="contacttext">call us</p></a>
        </div>
      </div>
    )
  }
}
export default About
