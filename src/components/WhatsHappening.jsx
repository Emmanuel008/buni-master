import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const happeningPosts = [
  {
    id: 1,
    title: "Innovation Workshop",
    description: "Join our upcoming workshop on technological innovation and entrepreneurship. Learn from industry experts and network with fellow innovators.",
    image: "/assests/images/weru.png",
    date: "Nov 15, 2024"
  },
  {
    id: 2,
    title: "Startup Showcase",
    description: "Discover innovative startups from our hub showcasing their groundbreaking solutions and technologies.",
    image: "/assests/images/show.png",
    date: "Sept 14, 2024"
  },
  {
    id: 3,
    title: "Tech Meetup",
    description: "Monthly tech meetup featuring discussions on emerging technologies and their impact on local innovation.",
    image: "Assests/images/lol2.png",
    date: "August 13, 2024"
  },
  {
    id: 4,
    title: "HubIquatous Program",
    description: "Participate in our innovation challenge and get a chance to win funding for your startup idea.",
    image: "/assests/images/dtb1.png",
    date: "July 12, 2024"
  }
];

const WhatsHappening = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="happening-section">
      <div className="happening-container">
        <h2>WHAT'S HAPPENING</h2>
        <h1>Latest at BuniHub</h1>
        
        <div className="happening-slider">
          <Slider {...settings}>
            {happeningPosts.map((post) => (
              <div key={post.id} className="happening-card">
                <div className="card-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.target.src = "/assests/images/fallback.jpg";
                    }}
                  />
                </div>
                <div className="card-content">
                  <div className="card-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <button className="read-more">Read More →</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhatsHappening; 