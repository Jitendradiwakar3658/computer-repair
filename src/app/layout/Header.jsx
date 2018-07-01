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
      <div>
        {/* <div id="logo" class="pull-left">
          <h1><a href="#intro" class="scrollto">Axis Computer</a></h1>
        </div> */}
        <br/><br/>
        <header className="nb-header nav-menu-container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">Axis Computer</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

               <div class="collapse navbar-collapse navmenu" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto nav-menu nav-bar">
                  <li class="nav-item active">

                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
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
                        DELL LAPTOP SERVICE
                      </Link>
                      <Link className="dropdown-item" to="/hp-laptop-service">
                        HP LAPTOP SERVICE
                      </Link>
                      <Link className="dropdown-item" to="/lenevo-laptop-service">
                        LENEVO LAPTOP SERVICE
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
            </div>
          </nav>
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
        </header>
      </div>
    )
  }
}
export default Header;
