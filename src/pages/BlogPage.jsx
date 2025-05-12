import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "BAM Blockchain",
    description: "Successfully completed the BAM Blockchain workshop in our community.",
    image: "/assests/images/BAM.png",
    date: "Jan 18, 2025"
  },
  {
    id: 2,
    title: "Ulead Project",
    description: "successfully completed the Ulead project in our community.",
    image: "/assests/images/ulead.png",
    date: "Dec 18, 2024"
  },
  {
    id: 3,
    title: "Tech Meetup",
    description: "Monthly tech meetup featuring discussions on emerging technologies and their impact on local innovation.",
    image: "/assests/images/ref.png",
    date: "Dec 05, 2024"
  },
  {
    id: 4,
    title: "Buni Divas",
    description: "We teach 3D printing technology and demonstrate how girls can leverage this technology to solve societal problems.",
    image: "/assests/images/divas.png",
    date: "Nov 25, 2024"
  }
];

const BlogPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      
      {/* Short Hero Section */}
      <div className="blog-hero-short">
        <div className="hero-content">
          <h1>Latest News & Updates</h1>
          <p>Stay informed about innovation and technology at Buni Hub</p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="happening-section">
        <div className="happening-container">
          <h2>NEWS & UPDATES</h2>
          <h1>Latest at BuniHub</h1>
          
          <div className="happening-grid">
            {blogPosts.map((post) => (
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage; 