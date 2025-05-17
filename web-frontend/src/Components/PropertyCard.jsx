import React, { useState } from 'react';
import styled from 'styled-components';
import { Heart, Bed, Bath, Ruler, MapPin } from 'lucide-react';

const PropertyCard = ({ property, addToFavourites }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <StyledCard 
      className={isHovered ? 'hovered' : ''}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img src={property.picture} alt={property.type} />
        <div className="image-overlay">
          <button
            className="favourite-btn"
            onClick={() => addToFavourites(property)}
            aria-label="Add to favorites"
          >
            <Heart size={22} />
          </button>
        </div>
        <div className="property-tag">
          {property.tenure === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
      </div>
      
      <div className="listing-info">
        <div className="price-tenure">
          <div className="price">Rs.{property.price.toLocaleString()}</div>
          <div className="tenure-badge">{property.tenure}</div>
        </div>
        
        <h3 className="property-title">{property.type}</h3>
        
        <div className="property-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
        
        <p className="property-description">{property.description}</p>
        
        <div className="property-stats">
          <div className="stat">
            <Bed size={18} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="stat">
            <Bath size={18} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="stat">
            <Ruler size={18} />
            <span>{property.size} sq.ft</span>
          </div>
        </div>
        
        <button className="view-property-btn">View Details</button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &.hovered {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  
  .card-image-container {
    position: relative;
    height: 240px;
    overflow: hidden;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }
  
  &:hover .image-overlay {
    opacity: 1;
  }
  
  .favourite-btn {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #ff6b6b;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .favourite-btn:hover {
    transform: scale(1.1);
    background: #fff;
  }
  
  .property-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(52, 152, 219, 0.9);
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .listing-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    color: #333;
  }
  
  .price-tenure {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .price {
    font-size: 24px;
    font-weight: 700;
    color: #3498db;
  }
  
  .tenure-badge {
    background: #f0f7ff;
    color: #3498db;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 20px;
    text-transform: capitalize;
  }
  
  .property-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
  
  .property-location {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  .property-description {
    font-size: 14px;
    line-height: 1.5;
    color: #777;
    margin-bottom: 20px;
    flex: 1;
  }
  
  .property-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
  }
  
  .stat {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #555;
    font-size: 14px;
  }
  
  .view-property-btn {
    background: transparent;
    border: 1px solid #3498db;
    color: #3498db;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    width: 100%;
  }
  
  .view-property-btn:hover {
    background: #3498db;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .price {
      font-size: 20px;
    }
    
    .property-title {
      font-size: 18px;
    }
  }
`;

export default PropertyCard;