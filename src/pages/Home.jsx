import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatsHappening from '../components/WhatsHappening';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <WhatsHappening />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home; 