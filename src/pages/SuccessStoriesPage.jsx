import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuccessStoriesPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="success-hero" aria-labelledby="success-heading">
        <div className="hero-image">
          <img 
            src="./assests/images/saba.jpg" 
            alt="Buni Hub success stories"
          />
        </div>
        <div className="overlay" aria-hidden="true"></div>
        <div className="row section-header">
          <div className="col-full">
            <h3 className="subhead">Success Stories</h3>
            <h1 id="success-heading" className="display-2 display-2--light">Buni Hub Success Stories</h1>
          </div>
        </div>
      </section>

      {/* Content Layout Section */}
      <section className="success-content-layout" aria-labelledby="documents-heading">
        <div className="content-container">
          {/* Left Side - Documents */}
          <div className="content-text">
            <h2 id="documents-heading" className="visually-hidden">Success Story Documents</h2>
            <div className="service-item" data-aos="fade-up">
              <div className="service-text">
                <h3 className="h2">TRACER STUDY DOCUMENT</h3>
                <p>
                  Click document below to download.<br />
                  <a 
                    className="smoothscroll btn btn--stroke" 
                    href="/assests/images/Tracer Study.pdf" 
                    style={{ color: '#FFA500' }}
                    aria-label="Download Tracer Study document"
                    download="Tracer Study.pdf"
                  >
                    <b>TRACER STUDY doc</b>
                  </a>
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-up">
              <div className="service-text">
                <h3 className="h2">COMPANY PROFILE DOCUMENT</h3>
                <p>
                  Click document below to download.<br />
                  <a 
                    className="smoothscroll btn btn--stroke" 
                    href="/assests/images/BUNI HUB 2024_Company Profile.pdf" 
                    style={{ color: '#FFA500' }}
                    aria-label="Download Buni Hub Company Profile document"
                    download="BUNI HUB 2024_Company Profile.pdf"
                  >
                    <b>COMPANY PROFILE</b>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="content-image">
            <img 
              src="./assests/images/kub.png" 
              alt="Buni Hub success story" 
            />
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="join-community" aria-labelledby="join-heading">
        <div className="join-container">
          <h2 id="join-heading">JOIN OUR COMMUNITY</h2>
          <h3>Be Part of Our Success Story</h3>
          <p>Join the Buni Hub community and start your innovation journey today!</p>
          <div className="join-buttons">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDQeKfE3ydjB9X2mhZNe0bZNajM9ilT3EsMh7CbKv4hC2sOw/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="join-btn"
              aria-label="Apply to join Buni Hub community"
            >
              Apply Now <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage; 