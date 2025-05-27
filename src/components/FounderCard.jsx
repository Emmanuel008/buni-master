import React, { useState } from 'react';

const FounderCard = ({ image, name, role, company, description, sensitiveData, expanded, onClick, onMoreClick }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={`space-card${expanded ? ' expanded' : ''}`} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="space-image">
        <img src={image} alt={name} />
      </div>
      <div className="space-info">
        <h3>{name}</h3>
        <span className="role-tag">{role}</span>
        <h4>{company}</h4>
        <button onClick={() => setShowDescription(!showDescription)}>Read More</button>
        {showDescription && <p>{description}</p>}
        {expanded && sensitiveData && (
          <div className="sensitive-data">
            <hr />
            <p><strong>Email:</strong> {sensitiveData.email}</p>
            <p><strong>Phone:</strong> {sensitiveData.phone}</p>
            <p><strong>Location:</strong> {sensitiveData.location}</p>
          </div>
        )}
        <div className="expand-hint">{expanded ? 'Click to hide details' : 'Click for more details'}</div>
        <button className="read-more" onClick={onMoreClick} style={{marginTop: '1rem'}}>More</button>
      </div>
    </div>
  );
};

export default FounderCard; 