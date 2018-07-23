import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/react-bootstrap/dist/react-bootstrap.js';
// import '../node_modules/react-owl-carousel2/src/owl.carousel.css';

// import '../src/app/lib/easing/easing.min.js';
// import '../src/app/lib/superfish/hoverIntent.js';
// import '../src/app/lib/superfish/superfish.min.js';
// import '../src/app/lib/wow/wow.min.js';
// import '../src/app/lib/waypoints/waypoints.min.js';
// import '../src/app/lib/counterup/counterup.min.js';
// import '../src/app/lib/owlcarousel/owl.carousel.min.js';
// import '../src/app/lireact-owl-carousel2.min.js';
// import '../src/app/lib/lightbox/js/lightbox.min.js';
// import '../src/app/lib/touchSwipe/jquery.touchSwipe.min.js';
// import '../src/app/js/main.js';

import App from "./App"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
