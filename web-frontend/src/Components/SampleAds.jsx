// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import propertyData from '../Properties.json'; // Import the properties JSON file
// import bgImage from '../Assets/pattern4.jpeg';

// // Importing icons from lucide-react
// import { Bed, Bath, Ruler, ChevronRight } from 'lucide-react';

// const SampleAds = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     // Load properties from the imported JSON data
//     setProperties(propertyData.properties);
//   }, []);

//   return (
//     <StyledWrapper>
//       <div className='Trending-title'>
//         Trending Listings
//       </div>
//       <div className="property-section">
//         {/* Rent Properties */}
//         <div className="property-type">
//           <div className='property-type-header'>
//             <div className='property-type-titles'>
//               Houses for Rent
//             </div>
//             <a href="/properties" className="see-more">
//               See more <ChevronRight size={15} />
//             </a>
//           </div>
//           <div className="property-cards">
//             {/* Display only the first 4 rent properties */}
//             {properties
//               .filter(prop => prop.type === 'House' && prop.tenure === 'Rent')
//               .slice(0, 4)  // Limit to 4 items
//               .map((property, index) => (
//                 <div key={index} className="property-card">
//                   {/* Dynamically import image */}
//                   <img src={`/PropertyImages/${property.picture}`} alt="Property" />
//                   <div className="card-details">
//                     <p className="price">Rs. {property.price}</p>
//                     <p className="name">{property.name}</p>
//                     <p className="address">{property.location}</p>
//                     <div className="stats">
//                       <span>
//                         <Bed size={16} /> {property.bedrooms}
//                       </span>
//                       <span>
//                         <Bath size={16} /> {property.bathrooms}
//                       </span>
//                       <span>
//                         <Ruler size={16} /> {property.size} sq.ft
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Sale Properties */}
//         <div className="property-type">
//           <div className='property-type-header'>
//             <div className='property-type-titles'>
//               Houses for Sale
//             </div>
//             <a href="/all-properties" className="see-more">
//               See more <ChevronRight size={15} />
//             </a>
//           </div>
//           <div className="property-cards">
//             {/* Display only the first 4 sale properties */}
//             {properties
//               .filter(prop => prop.type === 'House' && prop.tenure === 'Sale')
//               .slice(0, 4)  // Limit to 4 items
//               .map((property, index) => (
//                 <div key={index} className="property-card">
//                   {/* Dynamically import image */}
//                   <img src={`/PropertyImages/${property.picture}`} alt="Property" />
//                   <div className="card-details">
//                     <p className="price">Rs. {property.price}</p>
//                     <p className="name">{property.name}</p>
//                     <p className="address">{property.location}</p>
//                     <div className="stats">
//                       <span>
//                         <Bed size={16} /> {property.bedrooms}
//                       </span>
//                       <span>
//                         <Bath size={16} /> {property.bathrooms}
//                       </span>
//                       <span>
//                         <Ruler size={16} /> {property.size} sq.ft
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .property-section {
//     font-family: 'Afacad Flux';      
//     display: flex;
//     flex-direction: column;
//     gap: 40px;
//     margin-left: 215px;
//     margin-right: 215px;
//   }

//   .Trending-title {
//     margin-top: 50px;
//     font-size: 40px;
//     text-align: left;
//     font-weight: 500;
//     font-family: 'Afacad Flux';
//     margin-left: 215px;
//     margin-bottom: 20px;
//   }

//   .property-type-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .property-type-titles {
//     font-size: 25px;
//     text-align: left;
//     font-family: 'Afacad Flux';
//     margin-bottom: 10px;
//     font-weight: 300;
//   }

//   .see-more {
//     font-size: 14px;
//     font-weight: 300;
//     color:rgb(0, 24, 41);
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//   }

//   .see-more:hover {
//     text-decoration: underline;
//   }

//   .property-cards {
//     display: flex;
//     gap: 20px;
//     flex-wrap: wrap;
//     justify-content: space-between;
//   }

//   .property-card {
//     width: 250px;
//     background-image: url(${bgImage}); /* Using the imported bg image */    background-size: cover; /* Make sure the image covers the container */
//     background-position: center; /* Center the image */
//     background-repeat: no-repeat; /* Avoid repeating the image */
//     border-radius: 30px;
//     overflow: hidden;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0);
//     position: relative;
//     color: white;
//   }

//   .property-card img {
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   transition: opacity 0.6s ease-in-out; /* Smooth transition for opacity change */
//   opacity: 0.8; /* Default opacity (darkened image) */
// }

// .property-card:hover img {
//   opacity: 1; /* Full opacity (original image) when hovered */
// }


//   .card-details {
//     padding: 15px;
//     text-align: left;
//     font-family: 'Afacad Flux';
//   }

//   .price {
//     font-size: 30px;
//     font-weight: 600;
//     font-family: 'Afacad Flux';
//   }

//   .name {
//     font-size: 16px;
//     font-weight: 500;
//     font-family: 'Afacad Flux';
//   }

//   .address {
//     font-size: 13px;
//     font-weight: 300;
//     margin: 10px 0;
//     font-family: 'Afacad Flux';
//   }

//   .stats {
//     display: flex;
//     gap: 10px;
//     font-size: 12px;
//   }

//   .stats span {
//     display: flex;
//     align-items: center;
//     gap: 5px;
//   }
// `;

// export default SampleAds;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propertyData from '../Properties.json';
import { 
  Bed, 
  Bath, 
  Ruler, 
  ChevronRight, 
  MapPin, 
  Heart, 
  Share2, 
  Award,
  Crown,
  Shield,
  Clock,
  ArrowUpRight
} from 'lucide-react';

const SampleAds = () => {
  const [properties, setProperties] = useState([]);
  const [activeCategory, setActiveCategory] = useState('rent');

  useEffect(() => {
    // Load properties from the imported JSON data
    setProperties(propertyData.properties);
  }, []);

  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="section-header">
          <div className="header-content">
            <div className="section-tag">Premier Portfolio</div>
            <h2 className="section-title">Signature Properties</h2>
          </div>
          
          <div className="category-selector">
            <button 
              className={`category-btn ${activeCategory === 'rent' ? 'active' : ''}`}
              onClick={() => setActiveCategory('rent')}
            >
              For Lease
            </button>
            <button 
              className={`category-btn ${activeCategory === 'sale' ? 'active' : ''}`}
              onClick={() => setActiveCategory('sale')}
            >
              For Acquisition
            </button>
          </div>
        </div>
        
        <div className="featured-property">
          {properties
            .filter(prop => prop.type === 'House' && 
              ((activeCategory === 'rent' && prop.tenure === 'Rent') || 
              (activeCategory === 'sale' && prop.tenure === 'Sale')))
            .slice(0, 1)
            .map((property, index) => (
              <div key={index} className="featured-card">
                <div className="featured-image">
                  <img src={`/PropertyImages/${property.picture}`} alt={property.name} />
                  <div className="featured-badge">
                    <Crown size={14} strokeWidth={1.5} />
                    <span>Featured</span>
                  </div>
                </div>
                
                <div className="featured-details">
                  <div className="property-category">
                    {property.tenure === 'Rent' ? 'PREMIUM LEASE' : 'EXCLUSIVE ACQUISITION'}
                  </div>
                  
                  <h3 className="property-title">{property.name}</h3>
                  
                  <div className="property-location">
                    <MapPin size={16} strokeWidth={1.5} />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="property-description">
                    A magnificent property featuring exceptional design and premium amenities, 
                    situated in one of the most desirable locations. Experience luxury living at its finest.
                  </div>
                  
                  <div className="property-features">
                    <div className="feature">
                      <Bed size={18} strokeWidth={1.5} />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="feature">
                      <Bath size={18} strokeWidth={1.5} />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="feature">
                      <Ruler size={18} strokeWidth={1.5} />
                      <span>{property.size} sq.ft</span>
                    </div>
                  </div>
                  
                  <div className="property-price">
                    <div className="price-label">
                      {property.tenure === 'Rent' ? 'Monthly Lease' : 'Acquisition Price'}
                    </div>
                    <div className="price-value">Rs. {property.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="property-actions">
                    <button className="action-btn view-btn">
                      <span>View Details</span>
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </button>
                    <div className="quick-actions">
                      <button className="icon-btn">
                        <Heart size={18} strokeWidth={1.5} />
                      </button>
                      <button className="icon-btn">
                        <Share2 size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        <div className="property-grid">
          {properties
            .filter(prop => prop.type === 'House' && 
              ((activeCategory === 'rent' && prop.tenure === 'Rent') || 
              (activeCategory === 'sale' && prop.tenure === 'Sale')))
            .slice(1, 4)
            .map((property, index) => (
              <div key={index} className="property-card">
                <div className="card-image">
                  <img src={`/PropertyImages/${property.picture}`} alt={property.name} />
                  <div className="image-overlay">
                    <div className="quick-actions">
                      <button className="icon-btn">
                        <Heart size={16} strokeWidth={1.5} />
                      </button>
                      <button className="icon-btn">
                        <Share2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="property-badge">
                    {property.tenure === 'Rent' ? 'LEASE' : 'ACQUISITION'}
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="property-location">
                    <MapPin size={14} strokeWidth={1.5} />
                    <span>{property.location}</span>
                  </div>
                  
                  <h3 className="property-name">{property.name}</h3>
                  
                  <div className="property-features">
                    <div className="feature">
                      <Bed size={16} strokeWidth={1.5} />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="feature">
                      <Bath size={16} strokeWidth={1.5} />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="feature">
                      <Ruler size={16} strokeWidth={1.5} />
                      <span>{property.size} sq.ft</span>
                    </div>
                    <div className="price-tag">
                      <span>Rs. {property.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        <div className="section-footer">
          <div className="credentials">
            <div className="credential">
              <Award size={20} strokeWidth={1.5} />
              <span>Premium Selection</span>
            </div>
            <div className="credential">
              <Shield size={20} strokeWidth={1.5} />
              <span>Verified Listings</span>
            </div>
            <div className="credential">
              <Clock size={20} strokeWidth={1.5} />
              <span>Exclusive Early Access</span>
            </div>
          </div>
          
          <a href="/properties" className="view-more">
            <span>Browse Complete Portfolio</span>
            <ChevronRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  padding: 120px 0;
  background-color: #f8f9fa;
  
  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom:0px;
    padding: 0 40px;
  }
  
  /* Section Header */
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
  }
  
  .header-content {
    max-width: 600px;
  }
  
  .section-tag {
    font-size: 12px;
    font-weight: 400;
    color: #3498db;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 16px;
  }
  
  .section-title {
    font-size: 42px;
    font-weight: 300;
    color: #2c3e50;
    margin: 0;
    letter-spacing: -0.5px;
  }
  
  /* Category Selector */
  .category-selector {
    display: flex;
    gap: 12px;
  }
  
  .category-btn {
    padding: 12px 24px;
    background: transparent;
    border: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    
    &:hover {
      border-color: #3498db;
      color: #3498db;
    }
    
    &.active {
      background: #2c3e50;
      border-color: #2c3e50;
      color: white;
    }
  }
  
  /* Featured Property */
  .featured-property {
    margin-bottom: 60px;
  }
  
  .featured-card {
    display: flex;
    background: white;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
      
      .featured-image img {
        transform: scale(1.05);
      }
    }
  }
  
  .featured-image {
    position: relative;
    width: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }
  
  .featured-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #3498db;
    color: white;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  
  .featured-details {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }
  
  .property-category {
    font-size: 12px;
    font-weight: 600;
    color: #3498db;
    letter-spacing: 1.5px;
    margin-bottom: 16px;
  }
  
  .property-title {
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 16px;
    letter-spacing: -0.5px;
  }
  
  .property-location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64748b;
    margin-bottom: 20px;
    
    svg {
      color: #3498db;
    }
  }
  
  .property-description {
    font-size: 15px;
    line-height: 1.6;
    color: #64748b;
    margin-bottom: 24px;
  }
  
  .property-features {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2c3e50;
    
    svg {
      color: #3498db;
    }
  }
  
  .property-price {
    margin-top: auto;
    margin-bottom: 24px;
  }
  
  .price-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
    margin-bottom: 8px;
  }
  
  .price-value {
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
  }
  
  .property-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .action-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: #2c3e50;
    color: white;
    border: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #3498db;
    }
  }
  
  .quick-actions {
    display: flex;
    gap: 12px;
  }
  
  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid #e2e8f0;
    color: #64748b;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #3498db;
      color: #3498db;
    }
  }
  
  /* Property Grid */
  .property-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
  }
  
  .property-card {
    background: white;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
      
      .card-image img {
        transform: scale(1.05);
      }
      
      .image-overlay {
        opacity: 1;
      }
    }
  }
  
  .card-image {
    position: relative;
    height: 250px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    .quick-actions {
      display: flex;
      gap: 10px;
    }
    
    .icon-btn {
      background: white;
      width: 36px;
      height: 36px;
    }
  }
  
  .property-badge {
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 6px 12px;
    background: #2c3e50;
    color: white;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  
  .card-content {
    padding: 24px;
  }
  
  .property-name {
    font-size: 18px;
    font-weight: 500;
    color: #2c3e50;
    margin: 10px 0 16px;
  }
  
  .property-features {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    
    .feature {
      font-size: 13px;
    }
  }
  
  .price-tag {
    margin-left: auto;
    font-size: 16px;
    font-weight: 600;
    color: #3498db;
  }
  
  /* Section Footer */
  .section-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid #e2e8f0;
  }
  
  .credentials {
    display: flex;
    gap: 30px;
  }
  
  .credential {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #64748b;
    
    svg {
      color: #3498db;
    }
    
    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
  
  .view-more {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2c3e50;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #3498db;
      
      svg {
        transform: translateX(4px);
      }
    }
    
    svg {
      transition: transform 0.3s ease;
    }
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .section-title {
      font-size: 36px;
    }
    
    .featured-details {
      padding: 30px;
    }
    
    .property-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 992px) {
    padding: 100px 0;
    
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    
    .featured-card {
      flex-direction: column;
    }
    
    .featured-image, .featured-details {
      width: 100%;
    }
    
    .featured-image {
      height: 400px;
    }
    
    .section-footer {
      flex-direction: column;
      gap: 30px;
      align-items: flex-start;
    }
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
    
    .content-container {
      padding: 0 20px;
    }
    
    .property-grid {
      grid-template-columns: 1fr;
    }
    
    .featured-image {
      height: 300px;
    }
    
    .credentials {
      flex-direction: column;
      gap: 16px;
    }
  }
  
  @media (max-width: 576px) {
    padding: 60px 0;
    
    .section-title {
      font-size: 28px;
    }
    
    .category-btn {
      padding: 10px 16px;
      font-size: 12px;
    }
    
    .featured-details {
      padding: 24px;
    }
    
    .property-title {
      font-size: 20px;
    }
    
    .property-features {
      flex-wrap: wrap;
    }
  }
`;

export default SampleAds;