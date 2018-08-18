import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/react-bootstrap/dist/react-bootstrap.js';


import App from "./App"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
