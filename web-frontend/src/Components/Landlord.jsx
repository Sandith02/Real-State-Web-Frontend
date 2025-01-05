import React from 'react';
import styled from 'styled-components';

// Import the icon from lucide-react
import { SendHorizontal } from 'lucide-react';

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
            <button>
              <SendHorizontal size={24} />
            </button>
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
  .landlord-container {
    display: flex;
    padding: 50px;
    border-radius: 8px;
    margin-left: 215px;
    margin-right: 215px;
    font-family: 'Afacad Flux';
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .text-section {
    flex: 1;
    text-align: left;
    padding-right: 20px;
  }

  .text-section h2 {
    font-size: 40px;
    color: #333;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .text-section p {
    font-size: 20px;
    color: #555;
    font-weight: 300;
    margin-bottom: 25px;
  }

  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid rgb(54, 54, 54);
    border-radius: 30px;
    width: 450px;
  }

  .input-container input {
    padding: 15px;
    font-size: 15px;
    margin-left: 20px;
    width: 300px;
    border: none;
    outline: none;
    flex-grow: 1;
    border-radius: 8px;
  }

  .input-container button {
    background-color: transparent;
    color:rgb(25, 25, 25);
    font-size: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .input-container button:hover {
    color: #45a049;
  }

  .image-section img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default Landlord;
