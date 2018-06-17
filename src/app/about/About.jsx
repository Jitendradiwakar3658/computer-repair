import React from 'react'
import '../styles/style.css'
class About extends React.Component {
  render () {
    return (
      <div>
        <section id='about'>
          <div className='container'>
            <header className='section-header'>
              <h3 className='abc'>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>
            <div className='row about-cols'>
              <div className='col-md-4 wow fadeInUp'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src={require('../img/about-mission.jpg')}
                      alt='Image not found'
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <svg-icon><src href='svg/si-glyph-bed.svg' /></svg-icon>
                    </div>
                  </div>
                  <h2 className='title'><a href='#'>Our Mission</a></h2>
                  <p>
                  We believe in providing a service that is fair. We believe in upfront and transparent pricing, not charging for a service that doesn’t solve our customer’s problems, and by taking responsibility when we don’t perform our service as promised. 
                  </p>
                </div>
              </div>

              <div className='col-md-4 wow fadeInUp' data-wow-delay='0.1s'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src={require('../img/about-plan.jpg')}
                      alt=''
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <i className='ion-ios-list-outline' />
                    </div>
                  </div>
                  <h2 className='title'><a href='#'>Our Plan</a></h2>
                  <p>
                  We are easing the pain of technology frustrations with our knowledgeable and skilled technicians.  We are taking care of issues and providing technology solutions around the clock. To improve it we give you best service in Ghazibad.
                  </p>
                </div>
              </div>

              <div className='col-md-4 wow fadeInUp' data-wow-delay='0.2s'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src={require('../img/about-vision.jpg')}
                      alt=''
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <svg-icon>
                        <src href='sprite.svg#si-glyph-biscuit' />
                      </svg-icon>
                    </div>
                  </div>
                  <h2 className='title'><a href='#'>Our Vision</a></h2>
                  <p>
                  It’s our goal to be a top-most provider of computer support for businesses as well as home users. We believe in achieving this with prompt service at a affordable cost. Axis Computer is dedicated in providing the highest standards in computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default About
