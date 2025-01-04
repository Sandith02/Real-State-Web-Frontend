import React, { useState } from 'react';
import styled from 'styled-components';
import HouseImage from '../Assets/House.jpeg';
import ApartmentImage from '../Assets/Apartment.jpeg';
import CommercialImage from '../Assets/Commercial.jpeg';

const FilterSection = () => {
  const [price, setPrice] = useState(1000); // Initial price value
  const [selectedType, setSelectedType] = useState(''); // Track selected type (For Sale / For Rent)

  const handlePriceChange = (e) => {
    setPrice(e.target.value); // Update the price as the slider changes
  };

  const handleTypeChange = (type) => {
    setSelectedType(type); // Update the selected property type
  };

  return (
    <StyledWrapper>
      <div className='filter-header'>
      <h2>Property Type</h2>
      </div>  
      <div className="filter-container">
        {/* Property Type Section */}
        <div className="property-type">
          <div className="property-cards">
            <div className="property-card">
              <img src={HouseImage} alt="House" />
              <div className="card-content">
                <div className="card-title">Houses</div>
                <div className="card-description">Find a cozy home for your loved ones</div>
              </div>
            </div>
            <div className="property-card">
              <img src={ApartmentImage} alt="Apartment" />
              <div className="card-content">
                <div className="card-title">Apartments</div>
                <div className="card-description">Find a perfect apartment for your busy life</div>
              </div>
            </div>
            <div className="property-card">
              <img src={CommercialImage} alt="Commercial" />
              <div className="card-content">
                <div className="card-title">Commercial</div>
                <div className="card-description">Find a perfect property for your business</div>
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
            <label>Type</label>
            <select onChange={(e) => handleTypeChange(e.target.value)}>
              <option value="commercial">Commercial</option>
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
              <input
                type="range"
                min="0"
                max="10000"
                value={price}
                onChange={handlePriceChange}
              />
              <span>${price}</span>
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
    justify-content: space-between;
    gap: 20px;
  }

  .property-card {
    background-color: rgb(0, 0, 0);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 25px;
    width: 375px; /* Ensure that the property cards are equally spaced */
    display: flex;
    align-items: center;
  }

  .property-card img {
    width: 100px; /* Image takes half the width of the card */
    height: 100px;
    border-radius: 25px 0px 0px 25px;
  }

  .card-content {
    color: rgb(255, 255, 255);
    padding-left: 20px;
    text-align: left;
  }

  .card-title {
    font-family: 'Afacad Flux', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    align-items: center;
    font-weight: bold;
  }

  .card-description {
    align-items: center;
    font-family: 'Afacad Flux', sans-serif;
    font-size: 14px;
    margin-top: 5px;
  }

  .preferences-container {
    margin-right: 100px;
    display: flex;
    flex-wrap: wrap; /* Ensures items can flow onto the next line */
    gap: 10px;
    text-align: left;
    justify-content: flex-start;
  }

  .preferences-item {
    display: flex;
    flex-direction: column;
    width: 23%; /* Ensures items will wrap in rows */
  }

  .preferences-item label
    font-type: 'Afacad Flux', serif; {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .preferences-item select,
  .preferences-item input {
    padding: 5px;
    font-size: 14px;
  }

  .price-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-right: 80px;
   
  }

  .price-slider {
    width: 100%;
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

  .preferences-item button:hover {
    background-color: #2980b9;
  }

  .preferences-item span {
    font-size: 16px;
    font-weight: 600;
    font-type: 'Afacad Flux', serif;
    margin-left: 10px;
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

  .preferences-item span {
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
    font-type: 'Afacad Flux', serif;
  }
`;

export default FilterSection;
