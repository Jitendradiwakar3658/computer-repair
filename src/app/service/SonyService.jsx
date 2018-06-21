// import React from 'react';
// export class SonyService extends React.Component {
//     render() {
//         return(
//             <div>
//             <div><h1>SonyService service</h1></div>
//             <div><h1>SonyService service</h1></div>
//             <div><h1>SonyService service</h1></div>
//             <div><h1>SonyService service</h1></div>
//             <div><h1>SonyService service</h1></div>
//             </div>
//         );
//     }
// }
// export default SonyService;

import React, { Component } from 'react'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'

const options = {
  items: 4
}

class SonyService extends Component {
  render () {
    return (
      <div>
        <section className='has-small__padding has-grey__bg' />
        <section className='has-small__padding'>
          <Grid>
            <div title='Recommended Matches' />
            <OwlCarousel margin={10}>
              <div class='item'><img src={require('../img/portfolio/app1.jpg')} height={350} width={350}/></div>
              <div class='item'><img src={require('../img/portfolio/app2.jpg')} height={350} width={350}/></div>
              <div class='item'><h4>3</h4></div>
              <div class='item'><h4>4</h4></div>
              <div class='item'><h4>5</h4></div>
              <div class='item'><h4>6</h4></div>
            </OwlCarousel>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <OwlCarousel margin={10} nav>
              <div className='item'>
                <img src={require('../img/portfolio/app1.jpg')} />
              </div>
              <div className='item'>
                <img src={require('../img/portfolio/app2.jpg')} />
              </div>
              <div className='item'>
                <img src={require('../img/portfolio/app3.jpg')} />
              </div>
              <div className='item'>
                <img src={require('../img/portfolio/app1.jpg')} />
              </div>
              <div className='item'>
                <img src={require('../img/portfolio/app2.jpg')} />
              </div>
            </OwlCarousel>
          </Grid>
        </section>
      </div>
    )
  }
}

export default SonyService
