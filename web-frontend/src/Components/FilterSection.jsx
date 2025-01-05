import React, { useState } from 'react';
import styled from 'styled-components';
import HouseImage from '../Assets/House.jpeg';
import ApartmentImage from '../Assets/Apartment.jpeg';
import CommercialImage from '../Assets/Commercial.jpeg';
import WarehouseImage from '../Assets/Warehouse.jpeg';
import bgImage from '../Assets/house15.jpeg'

const FilterSection = () => {
  const [minPrice, setMinPrice] = useState(0); // Minimum price value
  const [maxPrice, setMaxPrice] = useState(10000); // Maximum price value
  const [selectedType, setSelectedType] = useState(''); // Track selected type (Houses, Apartments, Commercial)

  // Handle min price change
  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice); // Adjust max if min exceeds it
    }
    setMinPrice(newMinPrice); // Update min price
  };

  // Handle max price change
  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice); // Adjust min if max is less than it
    }
    setMaxPrice(newMaxPrice); // Update max price
  };

  const handleTypeChange = (type) => {
    setSelectedType(type); // Update the selected property type when an image is clicked
  };

  return (
    <StyledWrapper>
      <div className="filter-header">
        <h2>Explore Here</h2>
      </div>
      <div className="filter-container">
        {/* Property Type Section */}
        <div className="property-type">
          <div className="property-cards">
            <div className="row">
              <div
                className={`property-card ${selectedType === 'house' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('house')}
              >
                <img src={HouseImage} alt="House" />
                <div className="card-title">Houses</div>
              </div>
              <div
                className={`property-card ${selectedType === 'apartment' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('apartment')}
              >
                <img src={ApartmentImage} alt="Apartment" />
                <div className="card-title">Apartments</div>
              </div>
            </div>
            <div className="row">
              <div
                className={`property-card ${selectedType === 'commercial' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('commercial')}
              >
                <img src={CommercialImage} alt="Commercial" />
                <div className="card-title">Commercial</div>
              </div>
              <div
                className={`property-card ${selectedType === 'warehouse' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('warehouse')}
              >
                <img src={WarehouseImage} alt="Warehouse" />
                <div className="card-title">Warehouse</div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Preferences Section */}
        <div className="preferences-container">
          {/* Row 1 */}
          <div className="preferences-item">
            <label>Where</label>
            <select id='where'>
              <option value="colombo">Colombo, Sri Lanka</option>
            </select>
          </div>

          <div className="preferences-item">
            <label>Date Added</label>
            <select>
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>

          {/* Row 2 */}
          <div className="preferences-item">
            <label>Price</label>
            <div className="price-container">
              {/* Min and Max Price Input Fields */}
              <input
                type="number"
                value={minPrice}
                min="0"
                max="10000"
                onChange={handleMinPriceChange}
                className="price-input"
              />
              <span> - </span>
              <input
                type="number"
                value={maxPrice}
                min="0"
                max="10000"
                onChange={handleMaxPriceChange}
                className="price-input"
              />
            </div>
          </div>

          <div className="preferences-item">
            <label>Bedrooms</label>
            <select>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="plus4">+4</option>
            </select>
          </div>

          <div className="preferences-item">
            <label>Bathrooms</label>
            <select>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="plus4">+4</option>
            </select>
          </div>

          {/* Row 3 */}
          <div className="preferences-item-btn1">
            <button onClick={() => handleTypeChange('for-sale')}>For Sale</button>
          </div>
          <div className="preferences-item-btn1">
            <button onClick={() => handleTypeChange('for-rent')}>For Rent</button>
          </div>

          {/* Row 4 (Search Button) */}
          <div className="preferences-item-btn2">
            <button>Search</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-container {
    margin-top: 80px;
    margin-left: 215px;
    margin-right: 215px;
    display: flex;
    padding:30px;
    background-image: url(${bgImage}); /* Using the imported bg image */    background-size: cover; /* Make sure the image covers the container */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Avoid repeating the image */
    border-radius:40px;
    gap: 20px;
  }

  .property-type {
    text-align: center;
  }

  .filter-header h2 {
    font-family: 'Afacad Flux', serif;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
  }

  .property-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .property-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 0 10px;
    text-align: center;
  }

  .property-card.selected img {
    border: 3px solid rgb(255, 255, 255);
  }

  .property-card img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    object-fit: cover;
  }

  .card-title {
    font-family: 'Afacad Flux', sans-serif;
    font-size: 20px;
    margin-top: 10px;
    font-weight: 200;
    color: white;
  }

  .preferences-container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: flex-start;
    font-family: 'Afacad Flux', sans-serif;
  }
  .preferences-item {
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 25%;
  }
  .preferences-item select#where {
    width: 250px; 
  }
  .preferences-item label {
    font-size: 20px;
    color:white;
    font-weight: 200;
    margin-bottom: 15px;
  }

.preferences-item select,
.preferences-item input {
  padding: 10px;
  font-size: 15px;
  border: none; /* Remove default border */
  color: white;
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply the blur effect */
  border-radius: 10px; /* Rounded corners for the glass effect */
  transition: all 0.3s ease; /* Smooth transition for hover and focus */
}


.preferences-item select:hover,
.preferences-item select:focus,
.preferences-item input:focus {
  color:black;
}


  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-input {
    width: 80px;
    padding: 5px;
    font-size: 14px;
  }

  .preferences-item-btn1 button {
    padding: 10px;
    margin-right:-30px;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Apply the blur effect */
    border-radius: 10px; /* Rounded corners for the glass effect */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 120px;
    margin-top: 44px;
  }

  .preferences-item-btn2 button {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Apply the blur effect */
    border-radius: 10px; /* Rounded corners for the glass effect */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    margin-top: 44px;
  }

  .preferences-item button:hover {
    background-color: #2980b9;
  }
`;

export default FilterSection;
