import React, { useState } from 'react';
import styled from 'styled-components';

// Assuming the images are stored in the Assets folder
import HouseImage from '../Assets/House.jpeg';
import ApartmentImage from '../Assets/Apartment.jpeg';
import CommercialImage from '../Assets/Commercial.jpeg';

const FilterSection = () => {
  const [price, setPrice] = useState(1000); // Initial price value

  const handlePriceChange = (e) => {
    setPrice(e.target.value); // Update the price as the slider changes
  };

  return (
    <StyledWrapper>
      <div className="filter-container">
        {/* Property Type Section */}
        <div className="property-type">
          <h2>Property Type</h2>
          <div className="property-cards">
            <div className="property-card">
              <img src={HouseImage} alt="House" />
              <div className="card-title">Houses</div>
              <div className="card-description">Find a cozy home for your loved ones</div>
            </div>
            <div className="property-card">
              <img src={ApartmentImage} alt="Apartment" />
              <div className="card-title">Apartments</div>
              <div className="card-description">Find a perfect apartment for your busy life</div>
            </div>
            <div className="property-card">
              <img src={CommercialImage} alt="Commercial" />
              <div className="card-title">Commercial</div>
              <div className="card-description">Find a perfect property for your business</div>
            </div>
          </div>
        </div>

        {/* Select Preferences Section */}
        <div className="preferences-section">
          <h2>Select Your Preferences</h2>
          <div className="preferences-container">
            <div className="preferences-item">
              <label>Where</label>
              <select>
                <option value="colombo">Colombo, Sri Lanka</option>
              </select>
            </div>

            <div className="preferences-item">
              <label>Type</label>
              <select>
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

            <div className="preferences-item">
              <label>Price</label>
              <div className="price-container">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={price}
                  onChange={handlePriceChange}
                  className="price-slider"
                />
                <span>${price}</span>
              </div>
            </div>

            <div className="preferences-item">
              <button>For Sale</button>
              <button>For Rent</button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-container {
    margin-left:215px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  .property-type {
    width: 100%; /* Make the container full width */
    padding: 0 20px; /* Add some padding */
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .property-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .property-card {
    background-color: #2f2f2f;
    color: white;
    border-radius: 8px;
    width: 30%; /* Make each card take up 30% of the available space */
    padding: 15px;
    text-align: center;
  }

  .property-card img {
    width: 100%; /* Fill the card width */
    height: 250px; /* Fixed height for uniformity */
    object-fit: cover; /* Ensure images cover the area without stretching */
    border-radius: 8px;
  }

  .card-title {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }

  .card-description {
    font-size: 14px;
    margin-top: 5px;
  }

  .preferences-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .preferences-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .preferences-item label {
    font-size: 14px;
    width: 100px;
  }

  .preferences-item select,
  .preferences-item input {
    width: 200px;
  }

  .preferences-item button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .preferences-item button:hover {
    background-color: #2980b9;
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-slider {
    width: 80%;
  }

  .preferences-item span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export default FilterSection;
