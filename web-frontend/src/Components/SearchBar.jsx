import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <StyledWrapper>
      <div className="search-container">
        <select className="search-dropdown">
          <option value="for-sale">For Sale</option>
          <option value="for-rent">For Rent</option>
        </select>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Enter an address, city, neighborhood, or ZIP code."
        />
        <button className="search-button">
          <i className="fas fa-search"></i> {/* FontAwesome search icon */}
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    max-width: 800px;
    height: 50px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255); 
    border-radius: 50px;
    justify-content: space-between;
  }

  .search-dropdown {
    font-family: "Afacad Flux", serif;
    padding: 8px 15px;
    border-radius: 25px;
    border: none;
    background-color: white;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .search-dropdown option {
    color: #333;
    font-size: 1rem;
    padding: 10px;
  }

  .search-dropdown:focus {
    outline: none;  /* Remove the outline on focus */
  }

  .search-dropdown option:hover {
    background-color:rgb(102, 19, 19); /* Light grey background */
    color: #0056b3; /* Change text color on hover */
  }

  .search-input {
  font-family: "Comfortaa", serif;
  padding: 16px;
  margin-left: 10px;
  border-radius: 25px;
  border-color: #ccc;
  border: none;
  width: 100%;
  max-width: 500px;
  font-size: 0.8rem;
}

.search-input:focus {
  outline: none;  /* Remove the outline on focus */
}


  .search-button {
    padding: 10px 30px;
    margin-left: 10px;
    background-color:rgb(19, 18, 18);
    color: white;
    border: none;
    height: 50px;
    border-radius: 0px 50px 50px 0px;
    cursor: pointer;
  }

  .search-button:hover {
    background-color:rgb(112, 112, 112);
  }
`;

export default SearchBar;
