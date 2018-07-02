import React, { Component } from 'react';
import './App.css';
import Header from "./app/layout/Header"
import Footer from './app/layout/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
