import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="page-container">
      <Navbar />

      {/* Contact Section */}
      <section id="contact" className="s-contact" aria-labelledby="contact-heading">
        <div className="overlay"></div>

        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead" style={{ color: '#f65b01' }}>Contact Us</h3>
            <h1 id="contact-heading" className="display-2 display-2--light">Let innovators innovate.</h1>
          </div>
        </div>

        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <iframe 
              title="BuniHub Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22027.219133116207!2d39.214441739817374!3d-6.774316552012571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d5215a44823%3A0xad57554d05046760!2sCOSTECH!5e0!3m2!1sen!2stz!4v1716092040720!5m2!1sen!2stz" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing BuniHub location at COSTECH Building"
            />
          </div>

          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  BuniHub <br />
                  COSTECH Building, Ground Floor, Bagamoyo road <br />
                  Sayansi, Kijitonyam, <br />
                  Dar es salaam, Tanzania
                </p>
              </div>

              <div className="cinfo">
                <h5>Phone Us At</h5>
                <p>
                  <a href="tel:+255786599100" aria-label="Call us at +255 786 599 100">
                    +255 786 599 100
                  </a>
                </p>
              </div>

              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  <a href="mailto:info@bunihub.or.tz" aria-label="Email us at info@bunihub.or.tz">
                    info@bunihub.or.tz
                  </a>
                </p>
              </div>

              <ul className="contact-social" aria-label="Social media links">
                <li>
                  <a 
                    href="https://www.facebook.com/bunihub/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <span className="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/bunihub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/bunihub/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/channel/UCiOnji8o4Wt8b5ST-E57KjQ/videos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                    <span className="visually-hidden">YouTube</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/bunihub/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <span className="visually-hidden">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 