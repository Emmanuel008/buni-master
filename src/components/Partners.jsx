import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="partners-section">
      <div className="partners-container">
        <h2>OUR PARTNERS</h2>
        <h1>We are honored to have worked with</h1>
        
        <div className="partners-carousel">
          <Slider {...settings}>
            <div className="partner-logo">
              <img src="/assests/images/finland.png" alt="Finland Embassy"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/sweden.png" alt="Sweden Embassy"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/andelllla.png" alt="Andela"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/eu pic.png" alt="European Union"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/google.png" alt="Google"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/download.png" alt="Download"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/siili.png" alt="Siili"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/afrilab.jfif" alt="AfriLabs"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/atbn.jfif" alt="ATBN"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/outbox.jfif" alt="Outbox"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/itc.jfif" alt="ITC"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/hapoa.jfif" alt="Hapoa"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/dpixel.png" alt="DPixel"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/stimul.png" alt="Stimul"/>
            </div>
            <div className="partner-logo">
              <img src="/assests/images/porto.png" alt="Porto"/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners; 