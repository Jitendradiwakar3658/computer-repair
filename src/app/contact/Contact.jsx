import React from 'react'
import '../styles/style.css'
class Contact extends React.Component {
  render () {
    return (
      <div>
        <section id='call-to-action' class='wow fadeIn'>
          <div class='container text-center'>
            <h3>Call To Action</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a class='cta-btn' href='#'>Call To Action</a>
          </div>
        </section>
        <section id='contact' className='section-bg wow fadeInUp'>
          <div className='container'>

            <div className='section-header'>
              <h3>Contact Us</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              </p>
            </div>

            <div className='row contact-info'>

              <div className='col-md-4'>
                <img
                  src={require('../img/location.png')}
                  alt=''
                  className='img-fluid' height={27} width={27}
                />
                <div className='contact-address'>

                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>

              <div className='col-md-4'>
                <img
                  src={require('../img/contact.png')}
                  alt=''
                  className='img-fluid' height={27} width={27}
                />
                <div className='contact-phone'>
                  <h3>Phone Number</h3>
                  <p><a href='tel:+155895548855'>+1 5589 55488 55</a></p>
                </div>
              </div>

              <div className='col-md-4'>
                <img
                  src={require('../img/email.png')}
                  alt=''
                  className='img-fluid' height={25} width={25}
                />
                <div className='contact-email'>
                  <h3>Email</h3>
                  <p><a href='mailto:info@example.com'>info@example.com</a></p>
                </div>
              </div>

            </div>

            <div className='form'>
              <div id='sendmessage'>Your message has been sent. Thank you!</div>
              <div id='errormessage' />
              <form action='' method='post' role='form' className='contactForm'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Your Name'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 4 chars'
                    />
                    <div className='validation' />
                  </div>
                  <div className='form-group col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      data-rule='email'
                      data-msg='Please enter a valid email'
                    />
                    <div className='validation' />
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 8 chars of subject'
                  />
                  <div className='validation' />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    data-rule='required'
                    data-msg='Please write something for us'
                    placeholder='Message'
                  />
                  <div className='validation' />
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
export default Contact
