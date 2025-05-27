import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="logo">
          <img 
            src="/assests/images/buni logo.png" 
            alt="Buni Hub Logo" 
            className="logo-image"
          />
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <span>Home</span>
          </Link>
          <Link 
            to="/programs" 
            className={location.pathname === "/programs" ? "active" : ""}
          >
            <span>Programs</span>
          </Link>
          <Link 
            to="/success-stories" 
            className={location.pathname === "/success-stories" ? "active" : ""}
          >
            <span>Success Stories</span>
          </Link>
          <Link 
            to="/space" 
            className={location.pathname === "/space" ? "active" : ""}
          >
            <span>Space</span>
          </Link>
          <Link 
            to="/blog" 
            className={location.pathname === "/blog" ? "active" : ""}
          >
            <span>Blog</span>
          </Link>
          <Link 
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 