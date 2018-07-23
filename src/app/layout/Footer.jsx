import React from "react"
import "../styles/style.css";
import { Link } from "react-router-dom"

export class Footer extends React.Component {
  handleChange() {
    var src =  "/https://www.facebook.com/Computer-664432643598124";
    if(src){
      this.props.router.push(src);
    }
  }
  render () {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">

                <div className="col-lg-3 col-md-6 footer-info">
                  <h2>Dell Laptop Service Center</h2>
                  <p>
                  <strong>Dell Laptop Service Center in Ghaziabad</strong> provides Service and Repair in all kind of Dell Laptop. We provide
              <strong> home services</strong> as well as our <strong>own shop</strong>. We have 10+ years of experience to repair laptops like <strong>Dell, Hp,
                  Lenovo</strong> etc.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="fa fa-angle-double-right" /> <Link to="dell-laptop-service">Dell Service Center</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" /> <Link to="hp-laptop-service">Hp Service Center</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" /> <Link to="lenevo-laptop-service">Lenovo Service Center</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    Shop No. 1, First Floor, Sunrise Mall,  <br />
                     Sec-11, Vasundhara, Ghaziabad <br />
                    <strong>Phone:</strong> +91 8510 0446 42,<br/> 9873 8446 42<br />
                    <strong>Email:</strong> 2shiv.pratap@gmail.com<br />
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
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FComputer-664432643598124/&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                 title="" width={255} height={250}  scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" iframe-has-title="Axis Computer">
                  </iframe>
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
