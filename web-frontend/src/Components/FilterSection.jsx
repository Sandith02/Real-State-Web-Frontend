import React, { useState } from 'react';
import styled from 'styled-components';
import HouseImage from '../Assets/House.jpeg';
import ApartmentImage from '../Assets/Apartment.jpeg';
import CommercialImage from '../Assets/Commercial.jpeg';
import WarehouseImage from '../Assets/Warehouse.jpeg';

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
        <h2>Property Type</h2>
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
            <select>
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
    display: flex;
    gap: 20px;
  }

  .property-type {
    text-align: center;
  }

  .filter-header {
    font-family: 'Afacad Flux', serif;
    font-size: 24px;
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
    border: 2px solid #3498db;
  }

  .property-card img {
    width: 100px;
    height: 100px;
    border-radius: 25px;
    object-fit: cover;
  }

  .card-title {
    font-family: 'Afacad Flux', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
  }

  .preferences-container {
    margin-right: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }

  .preferences-item {
    display: flex;
    flex-direction: column;
    width: 23%;
  }

  .preferences-item label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .preferences-item select,
  .preferences-item input {
    padding: 5px;
    font-size: 14px;
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
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 120px;
    margin-top: 10px;
  }

  .preferences-item-btn2 button {
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    margin-top: 10px;
  }

  .preferences-item button:hover {
    background-color: #2980b9;
  }
`;

export default FilterSection;
