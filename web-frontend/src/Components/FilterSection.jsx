// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import HouseImage from '../Assets/House.jpeg';
// import ApartmentImage from '../Assets/Apartment.jpeg';
// import CommercialImage from '../Assets/Commercial.jpeg';
// import WarehouseImage from '../Assets/Warehouse.jpeg';
// import bgImage from '../Assets/house26.jpeg';

// const FilterSection = () => {
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(10000);
//   const [selectedType, setSelectedType] = useState('');
//   const [bedrooms, setBedrooms] = useState(''); // Bedrooms filter
//   const [bathrooms, setBathrooms] = useState(''); // Bathrooms filter
//   const [tenure, setTenure] = useState(''); // Tenure filter
//   const [dateAdded, setDateAdded] = useState(''); // Date Added filter
//   const [where, setWhere] = useState(''); // Location filter
//   const navigate = useNavigate(); // Set up navigation

//   const handleMinPriceChange = (e) => {
//     const newMinPrice = e.target.value;
//     if (newMinPrice > maxPrice) {
//       setMaxPrice(newMinPrice);
//     }
//     setMinPrice(newMinPrice);
//   };

//   const handleMaxPriceChange = (e) => {
//     const newMaxPrice = e.target.value;
//     if (newMaxPrice < minPrice) {
//       setMinPrice(newMaxPrice);
//     }
//     setMaxPrice(newMaxPrice);
//   };

//   const handleTypeChange = (type) => {
//     setSelectedType(type);
//   };

//   const handleSearch = () => {
//     // Create the query string from all filter values
//     const query = new URLSearchParams({
//       type: selectedType,
//       minPrice,
//       maxPrice,
//       bedrooms,
//       bathrooms,
//       tenure,
//       dateAdded,
//       where, // Add location to query string
//     }).toString();

//     // Navigate to the properties page with the query parameters
//     navigate(`/properties?${query}`);
//   };

//   return (
//     <StyledWrapper>
//       <div className="filter-header">
//         <h2>Explore Here</h2>
//       </div>
//       <div className="filter-container">
//         <div className="property-type">
//           <div className="property-cards">
//             <div className="row">
//               <div
//                 className={`property-card ${selectedType === 'house' ? 'selected' : ''}`}
//                 onClick={() => handleTypeChange('house')}
//               >
//                 <img src={HouseImage} alt="House" />
//                 <div className="card-title">Houses</div>
//               </div>
//               <div
//                 className={`property-card ${selectedType === 'apartment' ? 'selected' : ''}`}
//                 onClick={() => handleTypeChange('apartment')}
//               >
//                 <img src={ApartmentImage} alt="Apartment" />
//                 <div className="card-title">Apartments</div>
//               </div>
//             </div>
//             <div className="row">
//               <div
//                 className={`property-card ${selectedType === 'commercial' ? 'selected' : ''}`}
//                 onClick={() => handleTypeChange('commercial')}
//               >
//                 <img src={CommercialImage} alt="Commercial" />
//                 <div className="card-title">Commercial</div>
//               </div>
//               <div
//                 className={`property-card ${selectedType === 'warehouse' ? 'selected' : ''}`}
//                 onClick={() => handleTypeChange('warehouse')}
//               >
//                 <img src={WarehouseImage} alt="Warehouse" />
//                 <div className="card-title">Warehouse</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="preferences-container">
//           <div className="preferences-item">
//             <label>Where</label>
//             <select onChange={(e) => setWhere(e.target.value)} value={where}>
//               <option value="">Select Location</option>
//               <option value="colombo">Colombo</option>
//               <option value="colombo-05">Colombo 05</option>
//               <option value="colombo-03">Colombo 03</option>
//               <option value="colombo-07">Colombo 07</option>
//               <option value="colombo-02">Colombo 02</option>
//               <option value="colombo-10">Colombo 10</option>
//               <option value="moratuwa">Moratuwa</option>
//               <option value="kottawa">Kottawa</option>
//               <option value="galle">Galle</option>
//               <option value="kandy">Kandy</option>
//               <option value="matara">Matara</option>
//             </select>
//           </div>
//           <div className="preferences-item">
//             <label>Date Added</label>
//             <select onChange={(e) => setDateAdded(e.target.value)} value={dateAdded}>
//               <option value="">Anytime</option>
//               <option value="last-week">Last Week</option>
//               <option value="last-month">Last Month</option>
//               <option value="this-year">This Year</option>
//             </select>
//           </div>
//           <div className="preferences-item">
//             <label>Price</label>
//             <div className="price-container">
//               <input
//                 type="number"
//                 value={minPrice}
//                 min="0"
//                 max="10000"
//                 onChange={handleMinPriceChange}
//                 className="price-input"
//               />
//               <span> - </span>
//               <input
//                 type="number"
//                 value={maxPrice}
//                 min="0"
//                 max="100000000"
//                 onChange={handleMaxPriceChange}
//                 className="price-input"
//               />
//             </div>
//           </div>
//           <div className="preferences-item">
//             <label>Bedrooms</label>
//             <select onChange={(e) => setBedrooms(e.target.value)} value={bedrooms}>
//               <option value="">Any</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//               <option value="4">Four+</option>
//             </select>
//           </div>
//           <div className="preferences-item">
//             <label>Bathrooms</label>
//             <select onChange={(e) => setBathrooms(e.target.value)} value={bathrooms}>
//               <option value="">Any</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//               <option value="4">Four+</option>
//             </select>
//           </div>
//           <div className="preferences-item">
//             <label>Tenure</label>
//             <select onChange={(e) => setTenure(e.target.value)} value={tenure}>
//               <option value="">Any</option>
//               <option value="Sale">Sale</option>
//               <option value="Rent">Rent</option>
//             </select>
//           </div>
//           <div className="preferences-item-btn2">
//             <button onClick={handleSearch}>Search</button>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .filter-container {
//     margin-top: 80px;
//     margin-left: 215px;
//     margin-right: 215px;
//     display: flex;
//     padding:30px;
//     background-image: url(${bgImage}); /* Using the imported bg image */    background-size: cover; /* Make sure the image covers the container */
//     background-position: center; /* Center the image */
//     background-repeat: no-repeat; /* Avoid repeating the image */
//     border-radius:40px;
//     gap: 20px;
//   }

//   .property-type {
//     text-align: center;
//   }

//   .filter-header h2 {
//     font-family: 'Afacad Flux', serif;
//     font-size: 40px;
//     font-weight: 500;
//     margin-bottom:-50px;
//     text-align: center;
//   }

//   .property-cards {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }

//   .row {
//     display: flex;
//     justify-content: space-between;
//   }

//   .property-card {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     cursor: pointer;
//     padding: 0 10px;
//     text-align: center;
//   }

//   .property-card.selected img {
//     border: 3px solid rgb(255, 255, 255);
//   }

//   .property-card img {
//     width: 150px;
//     height: 150px;
//     border-radius: 30px;
//     object-fit: cover;
//   }

//   .card-title {
//     font-family: 'Afacad Flux', sans-serif;
//     font-size: 20px;
//     margin-top: 10px;
//     font-weight: 200;
//     color: white;
//   }

//   .preferences-container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 50px;
//     justify-content: flex-start;
//     font-family: 'Afacad Flux', sans-serif;
//   }
//   .preferences-item {
//     display: flex;
//     text-align: left;
//     flex-direction: column;
//     width: 25%;
//   }
//   .preferences-item select#where {
//     width: 250px; 
//   }
//   .preferences-item label {
//     font-size: 20px;
//     color:white;
//     font-weight: 200;
//     margin-bottom: 15px;
//   }

// .preferences-item select,
// .preferences-item input {
//   padding: 10px;
//   font-size: 15px;
//   border: none; /* Remove default border */
//   color: white;
//   background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
//   backdrop-filter: blur(10px); /* Apply the blur effect */
//   border-radius: 10px; /* Rounded corners for the glass effect */
//   transition: all 0.3s ease; /* Smooth transition for hover and focus */
// }


// .preferences-item select:hover,
// .preferences-item select:focus,
// .preferences-item input:focus {
//   color:rgb(147, 147, 147);
// }


//   .price-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .price-input {
//     width: 80px;
//     padding: 5px;
//     font-size: 14px;
//   }

//   .preferences-item-btn1 button {
//     padding: 10px;
//     margin-right:-30px;
//     background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
//     backdrop-filter: blur(10px); /* Apply the blur effect */
//     border-radius: 10px; /* Rounded corners for the glass effect */
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 120px;
//     margin-top: 44px;
//   }

//   .preferences-item-btn2 button {
//     padding: 10px;
//     background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
//     backdrop-filter: blur(10px); /* Apply the blur effect */
//     border-radius: 10px; /* Rounded corners for the glass effect */
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 150px;
//     margin-top: 44px;
//   }

//   .preferences-item button:hover {
//     background-color: #2980b9;
//   }

//    @media (max-width: 480px) { /* Mobile */
//     .filter-container {
//       margin-left: 20px;
//       margin-right: 20px;
//       flex-direction: column;
//       padding: 15px;
//       gap: 10px;
//     }

//     .row {
//       flex-direction: column;
//       align-items: center;
//       gap: 10px;
//     }

//     .property-card img {
//       width: 100px;
//       height: 100px;
//     }

//     .card-title {
//       font-size: 16px;
//     }

//     .preferences-item {
//       width: 100%;
//     }

//     .preferences-item label {
//       font-size: 14px;
//     }

//     .price-input {
//       width: 60px;
//       font-size: 10px;
//     }

//     .preferences-item-btn1 button,
//     .preferences-item-btn2 button {
//       width: 100px;
//       font-size: 12px;
//     }
//   }
// `;

// export default FilterSection;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HouseImage from '../Assets/House.jpeg';
import ApartmentImage from '../Assets/Apartment.jpeg';
import CommercialImage from '../Assets/Commercial.jpeg';
import WarehouseImage from '../Assets/Warehouse.jpeg';

const FilterSection = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedType, setSelectedType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [tenure, setTenure] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [where, setWhere] = useState('');
  const navigate = useNavigate();

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
    }
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
    }
    setMaxPrice(newMaxPrice);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleSearch = () => {
    const query = new URLSearchParams({
      type: selectedType,
      minPrice,
      maxPrice,
      bedrooms,
      bathrooms,
      tenure,
      dateAdded,
      where,
    }).toString();

    navigate(`/properties?${query}`);
  };

  return (
    <StyledWrapper>
      <div className="backdrop-elements">
        <div className="decor decor-1"></div>
        <div className="decor decor-2"></div>
      </div>
      
      <div className="content-container">
        <div className="section-intro">
          <div className="section-accent">Curated Selection</div>
          <h2 className="section-title">Discover Exceptional Properties</h2>
        </div>
        
        <div className="filter-panel">
          <div className="panel-overlay"></div>
          
          <div className="property-selector">
            <div className="selector-label">
              <span>Select Property Type</span>
              <div className="label-line"></div>
            </div>
            
            <div className="property-options">
              <div 
                className={`property-option ${selectedType === 'house' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('house')}
              >
                <div className="option-image">
                  <img src={HouseImage} alt="House" />
                </div>
                <div className="option-info">
                  <div className="option-name">Houses</div>
                  <div className="option-desc">Exclusive residences with premium amenities</div>
                </div>
              </div>
              
              <div 
                className={`property-option ${selectedType === 'apartment' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('apartment')}
              >
                <div className="option-image">
                  <img src={ApartmentImage} alt="Apartment" />
                </div>
                <div className="option-info">
                  <div className="option-name">Apartments</div>
                  <div className="option-desc">Luxury units in prime locations</div>
                </div>
              </div>
              
              <div 
                className={`property-option ${selectedType === 'commercial' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('commercial')}
              >
                <div className="option-image">
                  <img src={CommercialImage} alt="Commercial" />
                </div>
                <div className="option-info">
                  <div className="option-name">Commercial</div>
                  <div className="option-desc">Premium business spaces and retail</div>
                </div>
              </div>
              
              <div 
                className={`property-option ${selectedType === 'warehouse' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('warehouse')}
              >
                <div className="option-image">
                  <img src={WarehouseImage} alt="Warehouse" />
                </div>
                <div className="option-info">
                  <div className="option-name">Warehouses</div>
                  <div className="option-desc">Industrial properties with modern facilities</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="criteria-selector">
            <div className="selector-label">
              <span>Refine Your Search</span>
              <div className="label-line"></div>
            </div>
            
            <div className="criteria-group">
              <div className="filter-group primary">
                <div className="filter-item location">
                  <label>Location</label>
                  <div className="custom-select">
                    <select onChange={(e) => setWhere(e.target.value)} value={where}>
                      <option value="">Select Location</option>
                      <option value="colombo">Colombo</option>
                      <option value="colombo-05">Colombo 05</option>
                      <option value="colombo-03">Colombo 03</option>
                      <option value="colombo-07">Colombo 07</option>
                      <option value="colombo-02">Colombo 02</option>
                      <option value="colombo-10">Colombo 10</option>
                      <option value="moratuwa">Moratuwa</option>
                      <option value="kottawa">Kottawa</option>
                      <option value="galle">Galle</option>
                      <option value="kandy">Kandy</option>
                      <option value="matara">Matara</option>
                    </select>
                    <div className="select-arrow">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="filter-item price">
                  <label>Price Range</label>
                  <div className="price-inputs">
                    <input
                      type="number"
                      value={minPrice}
                      min="0"
                      max="10000"
                      onChange={handleMinPriceChange}
                      placeholder="Min"
                    />
                    <div className="price-separator">—</div>
                    <input
                      type="number"
                      value={maxPrice}
                      min="0"
                      max="100000000"
                      onChange={handleMaxPriceChange}
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
              
              <div className="filter-group secondary">
                <div className="filter-item">
                  <label>Bedrooms</label>
                  <div className="custom-select">
                    <select onChange={(e) => setBedrooms(e.target.value)} value={bedrooms}>
                      <option value="">Any</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four+</option>
                    </select>
                    <div className="select-arrow">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="filter-item">
                  <label>Bathrooms</label>
                  <div className="custom-select">
                    <select onChange={(e) => setBathrooms(e.target.value)} value={bathrooms}>
                      <option value="">Any</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four+</option>
                    </select>
                    <div className="select-arrow">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="filter-item">
                  <label>Tenure</label>
                  <div className="custom-select">
                    <select onChange={(e) => setTenure(e.target.value)} value={tenure}>
                      <option value="">Any</option>
                      <option value="Sale">Sale</option>
                      <option value="Rent">Rent</option>
                    </select>
                    <div className="select-arrow">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="filter-item">
                  <label>Date Added</label>
                  <div className="custom-select">
                    <select onChange={(e) => setDateAdded(e.target.value)} value={dateAdded}>
                      <option value="">Anytime</option>
                      <option value="last-week">Last Week</option>
                      <option value="last-month">Last Month</option>
                      <option value="this-year">This Year</option>
                    </select>
                    <div className="select-arrow">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="action-container">
                <button className="search-button" onClick={handleSearch}>
                  <span>Discover Properties</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: #f8f9fa;
  overflow: hidden;
  
  // /* Decorative elements */
  // .backdrop-elements {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 0;
  // }
  
  // .decor {
  //   position: absolute;
  //   border-radius: 50%;
  //   opacity: 0.4;
  //   filter: blur(100px);
  // }
  
  // .decor-1 {
  //   width: 600px;
  //   height: 600px;
  //   background-color: rgba(214, 240, 253, 0.4);
  //   top: -300px;
  //   right: -200px;
  // }
  
  // .decor-2 {
  //   width: 500px;
  //   height: 500px;
  //   background-color: rgba(214, 240, 253, 0.3);
  //   bottom: -200px;
  //   left: -150px;
  // }
  
  /* Content container */
  .content-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    z-index: 1;
    margin-bottom: 90px;
  }
  
  /* Section intro */
  .section-intro {
    text-align: center;
    margin-bottom: 80px;
  }
  
  .section-accent {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    color: #3498db;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 16px;
    position: relative;
  }
  
  .section-title {
    font-size: 42px;
    font-weight: 300;
    color: #2c3e50;
    margin: 0;
    letter-spacing: -0.5px;
  }
  
  /* Filter panel */
  .filter-panel {
    position: relative;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }
  
  .panel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: 1;
  }
  
  /* Property selector */
  .property-selector {
    padding: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 2;
  }
  
  .selector-label {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    
    span {
      font-size: 14px;
      font-weight: 500;
      color: #2c3e50;
      text-transform: uppercase;
      letter-spacing: 2px;
      white-space: nowrap;
      margin-right: 20px;
    }
    
    .label-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, rgba(52, 152, 219, 0.3), rgba(52, 152, 219, 0.05));
    }
  }
  
  .property-options {
    display: flex;
    gap: 30px;
  }
  
  .property-option {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s ease;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: #3498db;
      transition: width 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-5px);
      
      &::after {
        width: 30px;
      }
    }
    
    &.selected {
      &::after {
        width: 50px;
      }
      
      .option-name {
        color: #3498db;
      }
    }
  }
  
  .option-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  .property-option:hover .option-image img {
    transform: scale(1.1);
  }
  
  .option-info {
    text-align: center;
  }
  
  .option-name {
    font-size: 16px;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 8px;
    transition: color 0.3s ease;
  }
  
  .option-desc {
    font-size: 14px;
    color: #94a3b8;
    max-width: 200px;
  }
  
  /* Criteria selector */
  .criteria-selector {
    padding: 60px;
    position: relative;
    z-index: 2;
  }
  
  .criteria-group {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  .filter-group {
    display: flex;
    gap: 30px;
    
    &.primary {
      margin-bottom: 20px;
    }
    
    &.secondary {
      justify-content: space-between;
    }
  }
  
  .filter-item {
    flex: 1;
    
    &.location, &.price {
      flex: 1;
    }
    
    label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: #64748b;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
  }
  
  .custom-select {
    position: relative;
    
    select {
      width: 100%;
      padding: 16px;
      font-size: 15px;
      color: #334155;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: transparent;
      appearance: none;
      transition: all 0.3s ease;
      font-weight: 300;
      
      &:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      }
    }
    
    .select-arrow {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
  
  .price-inputs {
    display: flex;
    align-items: center;
    gap: 15px;
    
    input {
      flex: 1;
      padding: 16px;
      font-size: 15px;
      color: #334155;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: transparent;
      transition: all 0.3s ease;
      font-weight: 300;
      
      &:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      }
    }
    
    .price-separator {
      color: #94a3b8;
      font-size: 16px;
    }
  }
  
  /* Action container */
  .action-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  
  .search-button {
    padding: 18px 60px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 15px 30px rgba(44, 62, 80, 0.2);
    
    &:hover {
      background-color: #3498db;
      transform: translateY(-2px);
      box-shadow: 0 20px 40px rgba(52, 152, 219, 0.25);
    }
  }
  
  /* Media queries */
  @media (max-width: 1200px) {
    padding: 140px 0;
    
    .property-selector, .criteria-selector {
      padding: 40px;
    }
    
    .property-options {
      overflow-x: auto;
      padding-bottom: 20px;
      
      &::-webkit-scrollbar {
        height: 4px;
      }
      
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #cbd5e0;
        border-radius: 10px;
      }
    }
    
    .property-option {
      flex: 0 0 230px;
    }
  }
  
  @media (max-width: 992px) {
    padding: 100px 0;
    
    .section-title {
      font-size: 36px;
    }
    
    .filter-group {
      flex-direction: column;
      gap: 20px;
    }
    
    .option-image {
      height: 180px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
    
    .content-container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: 30px;
    }
    
    .property-selector, .criteria-selector {
      padding: 30px;
    }
    
    .selector-label span {
      font-size: 12px;
    }
    
    .property-option {
      flex: 0 0 200px;
    }
    
    .option-image {
      height: 160px;
    }
    
    .option-name {
      font-size: 14px;
    }
    
    .option-desc {
      font-size: 12px;
    }
  }
  
  @media (max-width: 576px) {
    padding: 60px 0;
    
    .section-title {
      font-size: 24px;
    }
    
    .property-selector, .criteria-selector {
      padding: 20px;
    }
    
    .search-button {
      width: 100%;
      padding: 16px 20px;
    }
    
    .property-option {
      flex: 0 0 160px;
    }
    
    .option-image {
      height: 140px;
    }
  }
`;

export default FilterSection;