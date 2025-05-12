const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Other Links</h3>
          <ul>
            <li><a href="#">CAPTUR-EAC</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect with us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get Notified</h3>
          <p>Keep Up With Our Works. Subscribe To Our Newsletter and Receive Updates.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright BuniHub</p>
      </div>
    </footer>
  );
};

export default Footer; 