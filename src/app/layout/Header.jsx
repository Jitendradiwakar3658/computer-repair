import React from "react";
import "../styles/style.css";

import Home from "./Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Blog from "../blog/Blog";
import "./Fixnavbar.js";
import { Link, Route, Switch } from "react-router-dom";
import { DellService } from "../service/DellService";
import HpService from "../service/HpService";
import LenevoService from "../service/LenevoService";
import NoidaLocation from "../supportlocation/NoidaLocation";
import DelhiLocation from "../supportlocation/DelhiLocation";
import GhaziabadLocation from "../supportlocation/GhaziabadLocation";

// Noida location
import Sector2 from "../NoidaSubLocations/Sector2";
import Sector3 from '../NoidaSubLocations/Sector3';
import Sector4 from '../NoidaSubLocations/Sector4';
import Sector10 from '../NoidaSubLocations/Sector10';
import Sector11 from '../NoidaSubLocations/Sector11';
import Sector15 from '../NoidaSubLocations/Sector15';
import Sector16 from '../NoidaSubLocations/Sector16';
import Sector18 from '../NoidaSubLocations/Sector18';
import Sector26 from '../NoidaSubLocations/Sector26';
import Sector28 from '../NoidaSubLocations/Sector28';
import Sector37 from '../NoidaSubLocations/Sector37';
import Sector58 from '../NoidaSubLocations/Sector58';
import Sector62 from '../NoidaSubLocations/Sector62';
import Sector63 from '../NoidaSubLocations/Sector63';
import Sector64 from '../NoidaSubLocations/Sector64';
import Sector71 from '../NoidaSubLocations/Sector71';

//Delhi Location 
import MayurVihar from '../DelhiSubLocation/MayurVihar';

//Ghaziabad Locations
import CrossingRepublic from '../GhaziabadSubLocation/CrossingRepublic';
import GovindPuram from '../GhaziabadSubLocation/GovindPuram';
import HindonArea from '../GhaziabadSubLocation/HindonArea';
import Indirapuram from '../GhaziabadSubLocation/Indirapuram';
import Kaushambi from '../GhaziabadSubLocation/Kaushambi'
import KaviNagar from '../GhaziabadSubLocation/KaviNagar';
import ModiNagar from '../GhaziabadSubLocation/ModiNagar';
import MohnaNagar from '../GhaziabadSubLocation/MohanNagar';
import RajNagar from '../GhaziabadSubLocation/RajNagar';
import RajNagarExt from '../GhaziabadSubLocation/RajNagarExt'
import Sahibabad from '../GhaziabadSubLocation/Sahibabad';
import RamPrashad from '../GhaziabadSubLocation/RamPrashad';
import SanjayNagar from '../GhaziabadSubLocation/SanjayNagar';
import Shalimar from '../GhaziabadSubLocation/Shalimar';
import Vaishali from '../GhaziabadSubLocation/Vaishali';
import Vasundhara from '../GhaziabadSubLocation/Vasundhara';
import MohanNagar from "../GhaziabadSubLocation/MohanNagar";

export class Header extends React.Component {
  render() {
    return (
      <div >

        {/* <div className="logos">
          <img
            src={require("../img/logo.png")} width={150} height={150}
            alt=""
            className="img-fluid logoimg"
          /><span><h6><strong>Dell Laptop Service Center</strong></h6></span>      
        </div> */}
<section>

  <div className="container">
  <div className="row w3layouts-top-strip col-sm-6"> 
            <Link className="navbar-brand" to="/#"><b>Dell Laptop Service Center</b><br/>
            <span className="brandtag"><b>Post Warranty Support</b></span></Link>
            
            <div className="coss ">
            <img
                  src={require("../img/email.png")}
                  alt=""
                  className="img-fluid conicon" height={20} width={20}
                />
             &nbsp;<a href="mailto:2shiv.pratap@gmail.com"><b>2shiv.pratap@gmail.com</b></a>
             &nbsp;&nbsp;&nbsp;
            
            <img src={require("../img/whatsapp.png")} width={27} height={27} alt=""
            className="img-fluid logoimg"
            />
             <a href="tel:+918510044642"><b>+91 8510 0446 42</b></a>
              </div>
              </div>
              </div>
              </section>
        <section>
        
          <header className="nav-menu-container">
          
            <nav className="navbar navbar-expand-md navbar-dark fixed-top navwidth">
            
              <button className="navbar-toggler tog-btn" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-default navbar-toggle icon-bar"></span>
              </button>
             
              {/* <div>Contact</div> */}
              <div className="collapse navbar-collapse bars" id="navbarResponsive">
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item navlist">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item navlist">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>

                  <li className="nav-item dropdown navlist">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/#"
                      id="navbarDropdownPortfolio"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Support Location
                    </Link>
                    <div
                      className="dropdown-menu dropdown-content"
                      aria-labelledby="navbarDropdownPortfolio"
                    >
                      <Link className="dropdown-item" to="/gaziabad-location">
                        Ghaziabad
                      </Link>
                      <Link className="dropdown-item" to="/noida-location">
                        Noida
                      </Link>
                      <Link className="dropdown-item" to="/delhi-location">
                        Delhi
                      </Link>

                    </div>
                  </li>
                  <li className="nav-item dropdown navlist">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/#"
                      id="navbarDropdownPortfolio"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <div
                      className="dropdown-menu dropdown-content"
                      aria-labelledby="navbarDropdownPortfolio"
                    >
                      <Link className="dropdown-item" to="/dell-laptop-service">
                        Dell Laptop Service
                      </Link>
                      <Link className="dropdown-item" to="/hp-laptop-service">
                        Hp Laptop Service
                      </Link>
                      <Link className="dropdown-item" to="/lenevo-laptop-service">
                        Lenovo Laptop Service
                      </Link>

                    </div>
                  </li>
                  <li className="nav-item navlist">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item navlist">
                    <Link className="nav-link" to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </nav>

          </header>
        </section>
        <Switch>
          {/* Noida Location Route */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gaziabad-location" component={GhaziabadLocation} />
          <Route path="/noida-location" component={NoidaLocation} />
          <Route path="/delhi-location" component={DelhiLocation} />
          <Route path="/dell-laptop-service" component={DellService} />
          <Route path="/hp-laptop-service" component={HpService} />
          <Route path="/lenevo-laptop-service" component={LenevoService} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/noida-sector-2" component={Sector2}/>
          <Route path="/noida-sector-3" component={Sector3}/>
          <Route path="/noida-sector-4" component={Sector4}/>
          <Route path="/noida-sector-10" component={Sector10}/>
          <Route path="/noida-sector-11" component={Sector11}/>
          <Route path="/noida-sector-15" component={Sector15}/>
          <Route path="/noida-sector-16" component={Sector16}/>
          <Route path="/noida-sector-18" component={Sector18}/>
          <Route path="/noida-sector-26" component={Sector26}/>
          <Route path="/noida-sector-28" component={Sector28}/>
          <Route path="/noida-sector-37" component={Sector37}/>
          <Route path="/noida-sector-58" component={Sector58}/>
          <Route path="/noida-sector-62" component={Sector62}/>
          <Route path="/noida-sector-63" component={Sector63}/>
          <Route path="/noida-sector-64" component={Sector64}/>
          <Route path="/noida-sector-71" component={Sector71}/>

          {/* Delhi Location Route */}
          
          <Route path="/mayur-vihar" component={MayurVihar}/>

          <Route path="/crossing-republic" component={CrossingRepublic}/>
          <Route path="/govind-puram-ghaziabad" component={GovindPuram}/>
          <Route path="/hindon-area-ghaziabad" component={HindonArea}/>
          <Route path="/indira-puram-ghaziabad" component={Indirapuram}/>
          <Route path="/kaushambi-ghaziabad" component={Kaushambi}/>
          <Route path="/kavi-nagar-ghazaiabad" component={KaviNagar}/>
          <Route path="/modi-nagar" component={ModiNagar}/>
          <Route path="/mohan-nagar-ghaziabad" component={MohanNagar}/>
          <Route path="/ram-prashad-ghaziabad" component={RamPrashad}/>
          <Route path="/raj-nagar-ghaziabad" component={RajNagar}/>
          <Route path="/raj-nagar-extension-ghaziabad" component={RajNagarExt}/>
          <Route path="/sahibabad-ghaziabad" component={Sahibabad}/>
          <Route path="/sanjay-nagar-ghaziabad" component={SanjayNagar}/>
          <Route path="/shalimar-ghaziabad" component={Shalimar}/>
          <Route path="/vaishali-ghaziabad" component={Vaishali}/>
          <Route path="/vasundhara-ghaziabad" component={Vasundhara}/>

          
        </Switch>
      </div>

    )
  }
}
export default Header;
