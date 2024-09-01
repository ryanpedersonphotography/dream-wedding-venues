import React from 'react';
import '../styles/VenueCard.css';

function VenueCard({ name, description }) {
  return (
    <div className="venue-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <button>View Details</button>
    </div>
  );
}

export default VenueCard;