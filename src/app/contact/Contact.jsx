import React from "react"
import "../styles/style.css"
class Contact extends React.Component {


  render() {
    return (
      <div>
        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">

            <div className="section-header">
              <h3>Contact Us</h3>
              <p>
                Email us with any query or call +91 8510 0446 42. We would be happy to solve your problem and set up meeting with you.
              </p>
            </div>

            <div className="row contact-info">

              <div className="col-md-4">
                <img
                  src={require("../img/location.png")}
                  alt=""
                  className="img-fluid" height={27} width={27}
                />
                <div className="contact-address">

                  <h3>Address</h3>
                  <address>Shop No. 6, First 
                    Floor, Sunrise Mall,
                    Sec-11, Vasundhara, Gzb. U.P.</address>
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src={require("../img/contact.png")}
                  alt=""
                  className="img-fluid" height={27} width={27}
                />
                <div className="contact-phone">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+918510044642">+91 8510 0446 42</a></p>
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src={require("../img/email.png")}
                  alt=""
                  className="img-fluid" height={25} width={25}
                />
                <div className="contact-email">
                  <h3>Email</h3>
                  <p><a href="mailto:2shiv.pratap@gmail.com">2shiv.pratap@gmail.com</a></p>
                </div>
              </div>

            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form action="" method="post" role="form" className="contactForm" action="mailto:jitendra.diwaker@gmail.com">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  />
                  <div className="validation" />
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
export default Contact
