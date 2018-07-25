import React from "react"
import "../styles/style.css"
import swal from 'sweetalert';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  createUser() {
    var apiUrl = 'https://mail.google.com/mail/u/0/?tab=wm#inbox';
    var self = this;
    fetch(apiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(self.state.user)
    }).then(res => {
      return res;
    }).then(data => {
      swal({
        title: 'Success',
        text: 'Succesfully Sent!',
        icon: 'success'
      });
    }).catch(err => {
      swal({
        title: 'Error',
        text: 'Failed to send!',
        icon: 'error'
      });
    });
  }

  handleChange(event) {
    var obj = this.state.user;
    if (event.target.name === 'status') {
        obj[event.target.name] = (event.target.checked ? true : false);
    }
    else {
        obj[event.target.name] = event.target.value;
    }

    this.setState({
        employee: obj
    }, () => {
        console.log(JSON.stringify(this.state.employee))
    });
}

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
                  className="img-fluid conicon" height={27} width={27}
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
                  className="img-fluid conicon" height={27} width={27}
                />
                <div className="contact-phone">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+918510044642">+91 8510 0446 42</a></p>
                  <p><a href="tel:+919873844642">+91 9873 8446 42</a></p>
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src={require("../img/email.png")}
                  alt=""
                  className="img-fluid conicon" height={25} width={25}
                />
                <div className="contact-email">
                  <h3>Email</h3>
                  <p><a href="mailto:2shiv.pratap@gmail.com">2shiv.pratap@gmail.com</a></p>
                </div>
              </div>

            </div>

            <div className="forms">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form method="post" className="contactForm" action="mailto:jitendra.diwaker@gmail.com">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name" value={this.state.user.name}
                      className="form-control"
                      id="name" onChange={(event) => this.handleChange(event)}
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
                      name="email" value={this.state.user.email}
                      id="email" onChange={(event) => this.handleChange(event)}
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
                    name="subject" value={this.state.user.subject}
                    id="subject" onChange={(event) => this.handleChange(event)}
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message" value={this.state.user.message}
                    rows="5" onChange={(event) => this.handleChange(event)}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  />
                  <div className="validation" />
                </div>
                <div className="text-center">
                  <button type="submit"  onClick={(event) => this.createUser(event)}>Send Message</button>
                </div>
              </form>
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
export default Contact
