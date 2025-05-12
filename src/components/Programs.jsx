import React from 'react';

const programs = [
  {
    id: 1,
    title: "Capacity Building to New Innovation Space",
    description: "This program focuses on supporting institutions to establish their innovation space. This is a tailor-made program that helps the institutions to understand the \"Best Practices\" on how to establish innovation space.",
    image: "/assests/images/blog2.jpg"
  },
  {
    id: 2,
    title: "Mentorship to Existing Innovation Spaces",
    description: "The program supports the existing spaces through mentorship. The support is tailored according to the needs of the Hub in question.",
    image: "/assests/images/blog1.jpg"
  },
  {
    id: 3,
    title: "Buni Talent Pool Program",
    description: "The program focuses on building talents with brilliant ideas that can have an impact on the community and can be useful to help companies to accelerate the work they do.",
    image: "/assests/images/vince.jpeg"
  },
  {
    id: 4,
    title: "Buni Divaz Program",
    description: "This program is designed to increase women involvement in Technology, Innovation and Entrepreneurship. It also aspires to encourage a safe space for women participation in the Innovation Ecosystem.",
    image: "/assests/images/sham.png"
  },
  {
    id: 5,
    title: "Linkages and Networking",
    description: "This program link and introduce our beneficiaries with potential stakeholders and government locally and international level.",
    image: "/assests/images/COSTECH-6.jpg"
  }
];

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        <h2>OUR PROGRAMS</h2>
        <h1>What We Offer</h1>
        
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-item" data-aos="fade-up">
              <div className="program-image">
                <img 
                  src={program.image} 
                  alt={program.title}
                  onError={(e) => {
                    e.target.src = "/assests/images/fallback.jpg";
                  }}
                />
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 