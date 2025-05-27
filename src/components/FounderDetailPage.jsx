import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FounderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const mockFounders = {
    1: {
      id: 1,
      name: "Taifa Tekk",
      role: "CEO",
      company: "TechTrain Academy",
      description: "TechTrain Academy is a premier training and consulting institution",
      image: "/images/abdallah-ally.jpg",
      sensitiveData: {
        email: "abdallah.ally@email.com",
        phone: "+255 123 456 789",
        location: "Dar es Salaam, Tanzania"
      }
    },
    2: {
      id: 2,
      name: "SIDO TLED HUB-Mwanza",
      role: "CEO",
      company: "Ukumbi",
      description: "Ukumbi is an online platform that aims to revolutionize the way people connect",
      image: "assets/images/COSTECH-24.jpg",
      sensitiveData: {
        email: "sido.tled@email.com",
        phone: "+255 987 654 321",
        location: "Mwanza, Tanzania"
      }
    },
    3: {
      id: 3,
      name: "Njombe FDC",
      role: "CEO",
      company: "Larven Syndicate Limited",
      description: "Larven is a software consultancy that develops enterprise solutions",
      image: "/images/adam-beleko.jpg",
      sensitiveData: {
        email: "adam.beleko@email.com",
        phone: "+255 555 666 777",
        location: "Arusha, Tanzania"
      }
    }
  };

  const founder = mockFounders[id] || mockFounders[1]; // Default to the first founder if ID not found

  const relatedFounders = Object.values(mockFounders).filter(f => f.id !== founder.id);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ color: '#00796b', textDecoration: 'none' }}>Home</Link> / <span style={{ color: '#888' }}>{founder.name}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={founder.image} alt={founder.name} style={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover' }} />
        <h1 style={{ margin: '20px 0 10px 0' }}>{founder.name}</h1>
        <p style={{ color: '#888', margin: '0 0 20px 0' }}>{founder.role} at {founder.company}</p>
        <p style={{ maxWidth: 600, textAlign: 'center' }}>{founder.description}</p>
        <div style={{ marginTop: '20px' }}>
          <p><strong>Email:</strong> {founder.sensitiveData.email}</p>
          <p><strong>Phone:</strong> {founder.sensitiveData.phone}</p>
          <p><strong>Location:</strong> {founder.sensitiveData.location}</p>
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <h2>Related Founders</h2>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '10px 0' }}>
          {relatedFounders.map(related => (
            <div key={related.id} style={{ flex: '0 0 auto', width: 200, textAlign: 'center' }}>
              <img src={related.image} alt={related.name} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }} />
              <h3 style={{ margin: '10px 0 5px 0' }}>{related.name}</h3>
              <p style={{ color: '#888' }}>{related.role} at {related.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderDetailPage; 