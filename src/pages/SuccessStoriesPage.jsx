import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuccessStoriesPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="success-hero">
        <div className="hero-image">
          <img 
            src="./assests/images/saba.jpg" 
            alt="Success Stories"
          />
        </div>
        <div className="overlay"></div>
        <div className="row section-header">
          <div className="col-full">
            <h3 className="subhead"></h3>
            <h1 className="display-2 display-2--light">Buni Hub Success Stories</h1>
          </div>
        </div>
      </section>

      {/* Content Layout Section */}
      <section className="success-content-layout">
        <div className="content-container">
          {/* Left Side - Documents */}
          <div className="content-text">
            <div className="service-item" data-aos="fade-up">
              <div className="service-text">
                <h3 className="h2">TRACER STUDY DOCUMENT</h3>
                <p>
                  Click document below to download.<br />
                  <a 
                    className="smoothscroll btn btn--stroke" 
                    href="/assests/images/Tracer Study.pdf" 
                    style={{ color: '#FFA500' }}
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
                  >
                    <b>COMPANY PROFILE</b>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="content-image">
            <img src="./assests/images/kub.png" alt="Buni Hub" />
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="join-community">
        <div className="join-container">
          <h2>JOIN OUR COMMUNITY</h2>
          <h3>Be Part of Our Success Story</h3>
          <p>Join the Buni Hub community and start your innovation journey today!</p>
          <div className="join-buttons">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDQeKfE3ydjB9X2mhZNe0bZNajM9ilT3EsMh7CbKv4hC2sOw/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="join-btn"
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage; 