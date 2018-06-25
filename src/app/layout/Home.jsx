import React from "react"
import "../styles/style.css"
import { Link } from "react-router-dom"

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-deom"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../img/slide2.jpg")}
                alt=""
                className="img-fluid"
              />
              <div className="carousel-caption">
                <Link to="#">
                  <h1>Welcome to Axis Computer</h1>
                  <p>Thank you, Jitendra!</p>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/slide3.jpg")}
                alt=""
                className="img-fluid"
              />
              <div className="carousel-caption carousel-edit">
                <Link to="#">
                  <h1 className="carousel-edit">Welcome to Axis Computer</h1>
                  <p>Thank you, Jitendra!</p>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/slide1.jpg")}
                alt=""
                className="img-fluid"
              />
              <div className="carousel-caption">
                <Link to="#">
                  <h1>Welcome to Axis Computer</h1>
                  <p>Thank you, Jitendra!</p>
                </Link>
              </div>
            </div>
          </div>
          {/* <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link> */}
        </div>

        <section id="services">
          <div className="container">

            <header className="section-header wow fadeInUp">
              <h3>Services</h3>
              <p>
                We provide home services as well as our own shop. We have 10+ years experience
                 to repair laptops like Dell, Hp, Lenovo, Macbook, Acer, Sony etc. We have good knack over
                 Motherboard replacement, Battery replacement, Software installation, Windows installation,
                 Hinges replacement, Keyboard replacement, Screen relacement.
              </p>
            </header>

            <div className="row">

              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-analytics-outline" />
                </div>
                <h4 className="title">
                  <Link to="dell-laptop-service">Dell Laptop</Link>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-bookmarks-outline" />
                </div>
                <h4 className="title">
                  <Link to="hp-laptop-service">Hp Laptop</Link>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-paper-outline" />
                </div>
                <h4 className="title">
                  <Link to="lenevo-laptop-service">Lenevo Laptop</Link>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-speedometer-outline" />
                </div>
                <h4 className="title">
                  <Link to="mac-laptop-service">Mac Book</Link>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-barcode-outline" />
                </div>
                <h4 className="title">
                  <Link to="sony-laptop-service">Sony Laptop</Link>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="icon">
                  <i className="ion-ios-barcode-outline" />
                </div>
                <h4 className="title">
                  <Link to="acer-laptop-service">Acer Laptop</Link>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>

            </div>

          </div>
        </section>
        {/* <section id="call-to-action" className="wow fadeIn">
          <div className="container text-center">
            <h3>Call To Action</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link className="cta-btn" to="#">Call To Action</Link>
          </div>
        </section> */}

        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Our Skills</h3>
              <p>
                We have best team to repair Laptops. We provide all kinds of servicing in laptop and we handle daily
                10-15 laptop repair and we provide you fast service so you can save your also. We are easing the pain of
                technology frustrations with our knowledgeable and skilled technicians. It’s our goal to be Link
                top-most provider of computer support for businesses as well as home users.
              </p>
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
                      <svg-icon><src to="svg/si-glyph-bed.svg" /></svg-icon>
                    </div>
                  </div>
                  <h2 className="title"><Link to="#">Our Mission</Link></h2>
                  <p>
                    We believe in providing Link service that is fair. We believe in upfront and transparent pricing, not charging for Link service that doesn’t solve our customer’s problems, and by taking responsibility when we don’t perform our service as promised.
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
                  <h2 className="title"><Link to="#">Our Plan</Link></h2>
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
                        <src to="sprite.svg#si-glyph-biscuit" />
                      </svg-icon>
                    </div>
                  </div>
                  <h2 className="title"><Link to="#">Our Vision</Link></h2>
                  <p>
                    It’s our goal to be Link top-most provider of computer support for businesses as well as home users. We believe in achieving this with prompt service at Link affordable cost. Axis Computer is dedicated in providing the highest standards in computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section-bg">
          <div className="container">

            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>

            <div className="row portfolio-container">

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/app1.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/web3.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">SOFTWARE INSTALLATION</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/web3.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/web3.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">SOFTWARE INSTALLATION</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/app2.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/app2.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">MOTHERBOARD REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/card2.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/card2.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">TOUCHPAD REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/web2.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/web2.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">BOTTOM BASE REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/app3.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/app3.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">HINGES REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/card1.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/card1.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">LAPTOP SERVICE</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/card3.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/card3.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">SCREEN REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={require("../img/portfolio/web1.jpg")}
                      className="img-fluid"
                      alt=""
                    />
                    <Link
                      to={require("../img/portfolio/web1.jpg")}
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </Link>
                    <Link to="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </Link>
                  </figure>

                  <div className="portfolio-info">
                    <h4><Link to="#">KEYBOARD REPLACEMENT</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="owl-carousel section-bg ">
          <div className="container">

            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="owl-carousel testimonials-carousel">
              <div className="testimonial-item">
                <img src={require("../img/testimonial-1.jpg")} className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
                <p>
                  <img
                    src={require("../img/quote-sign-left.png")}
                    className="quote-sign-left"
                    alt=""
                  />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <img
                    src={require("../img/quote-sign-right.png")}
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>

              <div className="testimonial-item">
                <img
                  src={require("../img/testimonial-2.jpg")}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <img
                    src={require("../img/quote-sign-left.png")}
                    className="quote-sign-left"
                    alt=""
                  />
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <img
                    src={require("../img/quote-sign-right.png")}
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>

              <div className="testimonial-item">
                <img
                  src={require("../img/testimonial-3.jpg")}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <img
                    src={require("../img/quote-sign-left.png")}
                    className="quote-sign-left"
                    alt=""
                  />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <img
                    src={require("../img/quote-sign-right.png")}
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>

              <div className="testimonial-item">
                <img
                  src={require("../img/testimonial-4.jpg")}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <img
                    src={require("../img/quote-sign-left.png")}
                    className="quote-sign-left"
                    alt=""
                  />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <img
                    src={require("../img/quote-sign-right.png")}
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>

              <div className="testimonial-item">
                <img
                  src={require("../img/testimonial-5.jpg")}
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <img
                    src={require("../img/quote-sign-left.png")}
                    className="quote-sign-left"
                    alt=""
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <img
                    src={require("../img/quote-sign-right.png")}
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>

            </div>

          </div>
        </section>

        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h3>Contact Us</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              </p>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <img
                  src={require("../img/location.png")}
                  height={27}
                  width={27}
                />
                <div className="contact-address">
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>

              <div className="col-md-4">
                <img
                  src={require("../img/contact.png")}
                  height={27}
                  width={27}
                />
                <br />
                <div className="contact-phone">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+918510044642">+91 8510 0446 42</a></p>
                </div>
              </div>

              <div className="col-md-4">
                <img src={require("../img/email.png")} height={25} width={25} />
                <br />
                <div className="contact-email">
                  <h3>Email</h3>
                  <p><a href="mailto:2shiv.pratap@gmail.com">2shiv.pratap@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage" />
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text" name="name" className="form-control" id="name"
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
                      data-msg="Please enter Link valid email"
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
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    )
  }
}
export default Home
