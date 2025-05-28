const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Other Links</h3>
          <ul>
            <li><a href="/captur-eac" aria-label="Visit CAPTUR-EAC">CAPTUR-EAC</a></li>
            <li><a href="/about" aria-label="Learn more about us">About</a></li>
            <li><a href="/community" aria-label="Join our community">Community</a></li>
            <li><a href="/news" aria-label="Read our news">News</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with us</h3>
          <ul>
            <li><a href="https://facebook.com/bunihub" aria-label="Follow us on Facebook">Facebook</a></li>
            <li><a href="https://twitter.com/bunihub" aria-label="Follow us on Twitter">Twitter</a></li>
            <li><a href="https://instagram.com/bunihub" aria-label="Follow us on Instagram">Instagram</a></li>
            <li><a href="https://youtube.com/bunihub" aria-label="Subscribe to our YouTube channel">Youtube</a></li>
            <li><a href="https://linkedin.com/company/bunihub" aria-label="Connect with us on LinkedIn">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get Notified</h3>
          <p>Keep Up With Our Works. Subscribe To Our Newsletter and Receive Updates.</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email-subscribe" className="visually-hidden">Email Address</label>
            <input 
              type="email" 
              id="email-subscribe"
              placeholder="Email Address" 
              aria-label="Enter your email address"
            />
            <button type="submit" aria-label="Subscribe to newsletter">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Copyright BuniHub</p>
      </div>
    </footer>
  );
};

export default Footer; 