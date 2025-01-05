import React from 'react';
import styled from 'styled-components';

// Import the image (replace the placeholder path with the actual one)
import landlordImage from '../Assets/Person 07.jpeg';  // Adjust path as needed

const Landlord = () => {
  return (
    <StyledWrapper>
      <div className="landlord-container">
        <div className="text-section">
          <h2>Are you a landlord?</h2>
          <p>
            We will guarantee a formidable price for your property. Ready to get started? Send us an email or contact us at +94 012 345 678 to list your property today.
          </p>
          <div className="input-container">
            <input type="text" placeholder="Enter your contact info..." />
            <button>→</button>
          </div>
        </div>
        <div className="image-section">
          <img src={landlordImage} alt="Landlord" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f8f8f8;
  border-radius: 8px;

  .landlord-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .text-section {
    flex: 1;
    padding-right: 20px;
  }

  .text-section h2 {
    font-size: 32px;
    color: #333;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .text-section p {
    font-size: 18px;
    color: #555;
    margin-bottom: 25px;
  }

  .input-container {
    display: flex;
    align-items: center;
  }

  .input-container input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }

  .input-container button {
    background-color: #4CAF50;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-container button:hover {
    background-color: #45a049;
  }

  .image-section img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default Landlord;
