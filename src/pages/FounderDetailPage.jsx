import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FounderDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const founder = location.state?.founder;

  // Example: You can add these fields to the founder object or display them statically for now
  const extraData = [
    { label: 'Early-stage startups', value: 'N/L' },
    { label: 'Funding/Grants', value: '' },
    { label: 'Capacity building for our staff', value: '' },
    { label: 'Access to funding (e.g., grants, seed capital, investors)', value: '' },
    { label: 'Facilitation of workshops and boot camps', value: '' },
    { label: 'Funding', value: 'Yes' },
    { label: 'Business development', value: 'Yes' },
    { label: 'Tech innovations', value: 'Yes' },
    { label: 'Some of our incubates has been funded by Costech regarding innovation support funding', value: 'Yes' },
    { label: 'NGOs, government agencies', value: '' },
    { label: 'Incubates', value: 'N/L' },
    { label: 'SIDO TLED HUB-Mwanza', value: '' },
  ];

  // Dummy socials (replace with real links if available)
  const socials = [
    { icon: <FaLinkedin />, url: founder?.linkedin || '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: founder?.twitter || '#', label: 'Twitter' },
    { icon: <FaEnvelope />, url: founder?.sensitiveData?.email ? `mailto:${founder.sensitiveData.email}` : '#', label: 'Email' },
  ];

  if (!founder) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>No founder data found.</div>;
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="space-section">
        <div className="space-container">
          {/* Breadcrumb */}
          <nav style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: '#888' }} aria-label="breadcrumb">
            <Link to="/" style={{ color: '#FF6347', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link to="/space" style={{ color: '#FF6347', textDecoration: 'none', fontWeight: 500 }}>Space</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: '#222', fontWeight: 600 }}>{founder.name}</span>
          </nav>
          {/* <button onClick={() => navigate(-1)} style={{ marginBottom: '2rem', padding: '0.5rem 1.5rem', borderRadius: '5px', border: 'none', background: '#FF6347', color: 'white', cursor: 'pointer' }}>Back</button> */}
          <div className="space-card" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'stretch', minHeight: 320, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            {/* Left Side: Photo, Name, Role, Startup, Socials */}
            <div style={{ flex: '0 0 320px', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px 0 0 10px', padding: '2rem 1rem' }}>
              <div style={{ width: 180, height: 180, borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <img src={founder.image} alt={founder.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ color: '#222', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>{founder.name}</h2>
              <div style={{ color: '#FF6347', fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0' }}>{founder.role}</div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                {socials.map((s, idx) => (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label} style={{ color: '#FF6347', fontSize: '1.5rem', transition: 'color 0.2s' }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Right Side: Details */}
            <div style={{ flex: 1, padding: '2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ color: '#333', fontSize: '1.1rem', marginBottom: '1.2rem' }}>{founder.description}</p>
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ color: '#888', fontWeight: 500, marginBottom: 4 }}>Contact</div>
                <div style={{ color: '#222', fontWeight: 600 }}><strong>Email:</strong> {founder.sensitiveData?.email}</div>
                <div style={{ color: '#222', fontWeight: 600 }}><strong>Phone:</strong> {founder.sensitiveData?.phone}</div>
                <div style={{ color: '#222', fontWeight: 600 }}><strong>Location:</strong> {founder.sensitiveData?.location}</div>
              </div>
              <div>
                <div style={{ color: '#888', fontWeight: 500, marginBottom: 4 }}>Additional Information</div>
                <ul style={{ textAlign: 'left', paddingLeft: '1.2em', color: '#444', fontSize: '1rem', margin: 0 }}>
                  {extraData.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 4 }}><strong>{item.label}:</strong> {item.value || <span style={{color:'#bbb'}}>N/A</span>}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FounderDetailPage; 