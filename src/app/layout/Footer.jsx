import React from "react"
import "../styles/style.css";
import { Link } from "react-router-dom"

export class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">

                <div className="col-lg-3 col-md-6 footer-info">
                  <h2>Axis Computer</h2>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
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
                    <li>
                      <i className="ion-ios-arrow-right" />
                      <Link to="mac-laptop-service">MacBook Service Center</Link>
                    </li>
                    <li>
                      <i className="ion-ios-arrow-right" />
                      <Link to="acer-laptop-service">Acer Service Center</Link>
                    </li>
                    <li>
                      <i className="ion-ios-arrow-right" />
                      <Link to="sony-laptop-service">Sony Service Center</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>

                  <div className="social-links">
                    <Link to="#" className="twitter"><i className="fa fa-twitter" /></Link>
                    <Link to="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="#" className="instagram">
                      <i className="fa fa-instagram" />
                    </Link>
                    <Link to="#" className="google-plus">
                      <i className="fa fa-google-plus" />
                    </Link>
                    <Link to="#" className="linkedin">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 footer-newsletter">
                  <h4>Follow Us On facebook</h4>
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={255} height={250}  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                  </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              © Copyright <strong>Axis Computer</strong>. All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
