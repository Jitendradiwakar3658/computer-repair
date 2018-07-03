import React from "react"
import "../styles/style.css"

import Home from "./Home"
import About from "../about/About"
import Contact from "../contact/Contact"
import Blog from "../blog/Blog"
import { Link, Route, Switch } from "react-router-dom"
import { DellService } from "../service/DellService"
import HpService from "../service/HpService"
import LenevoService from "../service/LenevoService"
import NoidaLocation from "../supportlocation/NoidaLocation"
import GreaterNoidaLocation from "../supportlocation/GreaterNoidaLocation"
import GhaziabadLocation from "../supportlocation/GhaziabadLocation"

export class Header extends React.Component {
  render() {
    return (
      <div >
        
        <br/><br/>
       {/* <header>
        <div className="logo" >
          <Link to="/">Axis Computer</Link>
        </div>
         <nav>
           <ul>
           <li className="nav-item active">
                    <Link  to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="dropdown-toggle"
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
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdownPortfolio"
                    >
                      <Link className="dropdown-item" to="/gaziabad-location">
                        Ghaziabad
                      </Link>
                      <Link className="dropdown-item" to="/noida-location">
                        Noida
                      </Link>
                      <Link className="dropdown-item" to="/greater-noida-location">
                        Greater Noida
                      </Link>
                     
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="dropdown-toggle"
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
                      className="dropdown-menu "
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
                  <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog">Blog</Link>
                  </li>
           </ul>
         </nav>
       </header> */}
        {/* <div className="logo" >
          <Link to="/">Axis Computer</Link>
        </div> */}
       <section>
        <header className="nav-menu-container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
              <Link className="navbar-brand" to="/">Axis Computer</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

               <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto ">
                  <li className="nav-item active">

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>

                  <li className="nav-item dropdown">
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
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdownPortfolio"
                    >
                      <Link className="dropdown-item" to="/gaziabad-location">
                        Ghaziabad
                      </Link>
                      <Link className="dropdown-item" to="/noida-location">
                        Noida
                      </Link>
                      <Link className="dropdown-item" to="/greater-noida-location">
                        Greater Noida
                      </Link>
                     
                    </div>
                  </li>
                  <li className="nav-item dropdown">
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
                      className="dropdown-menu "
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
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
          </nav>
          
        </header>
        </section>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gaziabad-location" component={GhaziabadLocation}/>
            <Route path="/noida-location" component={NoidaLocation}/>
            <Route path="/greater-noida-location" component={GreaterNoidaLocation}/>
            <Route path="/dell-laptop-service" component={DellService} />
            <Route path="/hp-laptop-service" component={HpService} />
            <Route path="/lenevo-laptop-service" component={LenevoService} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      
    )
  }
}
export default Header;
