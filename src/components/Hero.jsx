import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-image">
          <img 
            src="./assests/images/Hero.jpg"
            alt="Hub of Hubs"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="hero-content">
          <h1>THE HUB OF HUBS</h1>
          <p>Connecting Communities, Empowering Innovation</p>
        </div>
      </section>
    </div>
  );
};

export default Hero; 