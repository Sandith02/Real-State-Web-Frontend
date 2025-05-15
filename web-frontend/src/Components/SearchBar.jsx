// import React from 'react';
// import styled from 'styled-components';

// const SearchBar = () => {
//   return (
//     <StyledWrapper>
//       <div className="search-container">
//         <select className="search-dropdown">
//           <option value="for-sale">For Sale</option>
//           <option value="for-rent">For Rent</option>
//         </select>
//         <input 
//           type="text" 
//           className="search-input" 
//           placeholder="Enter an address, city, neighborhood, or ZIP code."
//         />
//         <button className="search-button">
//           <i className="fas fa-search"></i> {/* FontAwesome search icon */}
//         </button>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .search-container {
//     display: flex;
//     align-items: center;
//     max-width: 800px;
//     height: 50px;
//     margin: 0 auto;
//     background-color: rgba(255, 255, 255); 
//     border-radius: 50px;
//     justify-content: space-between;
//   }

//   .search-dropdown {
//     font-family: "Afacad Flux", serif;
//     padding: 8px 15px;
//     border-radius: 25px;
//     border: none;
//     background-color: white;
//     font-size: 1.1rem;
//     cursor: pointer;
//   }
//   .search-dropdown option {
//     color: #333;
//     font-size: 1rem;
//     padding: 10px;
//   }

//   .search-dropdown:focus {
//     outline: none;  /* Remove the outline on focus */
//   }

//   .search-dropdown option:hover {
//     background-color:rgb(102, 19, 19); /* Light grey background */
//     color: #0056b3; /* Change text color on hover */
//   }

//   .search-input {
//   font-family: "Comfortaa", serif;
//   padding: 16px;
//   margin-left: 10px;
//   border-radius: 25px;
//   border-color: #ccc;
//   border: none;
//   width: 100%;
//   max-width: 500px;
//   font-size: 0.8rem;
// }

// .search-input:focus {
//   outline: none;  /* Remove the outline on focus */
// }


//   .search-button {
//     padding: 10px 30px;
//     margin-left: 10px;
//     background-color:rgb(19, 18, 18);
//     color: white;
//     border: none;
//     height: 50px;
//     border-radius: 0px 50px 50px 0px;
//     cursor: pointer;
//   }

//   .search-button:hover {
//     background-color:rgb(112, 112, 112);
//   }
// `;

// export default SearchBar;


import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("For Sale");
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <StyledWrapper>
      <div className="search-container">
        <div className="custom-dropdown">
          <div 
            className="selected-option" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedOption}
            <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {showDropdown && (
            <div className="dropdown-menu">
              <div 
                className={`dropdown-item ${selectedOption === "For Sale" ? "active" : ""}`}
                onClick={() => handleOptionSelect("For Sale")}
              >
                For Sale
              </div>
              <div 
                className={`dropdown-item ${selectedOption === "For Rent" ? "active" : ""}`}
                onClick={() => handleOptionSelect("For Rent")}
              >
                For Rent
              </div>
            </div>
          )}
        </div>
        
        <div className="divider"></div>
        
        <input
          type="text"
          className="search-input"
          placeholder="Enter an address, city, neighborhood, or ZIP code."
        />
        
        <button className="search-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    height: 56px;
    margin: 0 auto;
    background-color: white;
    border-radius: 100px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 0 6px 0 6px;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    }
  }
  
  .custom-dropdown {
    position: relative;
    min-width: 130px;
    user-select: none;
  }
  
  .selected-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter", "Afacad Flux", sans-serif;
    padding: 0 18px;
    height: 56px;
    line-height: 56px;
    font-size: 15px;
    font-weight: 500;
    color: #2c3e50;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 28px 0 0 28px;
    
    &:hover {
      background-color: rgba(52, 152, 219, 0.05);
    }
    
    .dropdown-arrow {
      margin-left: 8px;
      transition: transform 0.2s ease;
      transform: ${props => props.showDropdown ? 'rotate(180deg)' : 'rotate(0)'};
    }
  }
  
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 100%;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10;
    overflow: hidden;
    animation: fadeIn 0.2s ease;
  }
  
  .dropdown-item {
    padding: 12px 18px;
    font-family: "Inter", "Afacad Flux", sans-serif;
    font-size: 15px;
    color: #4a5568;
    cursor: pointer;
    transition: all 0.15s ease;
    
    &:hover {
      background-color: rgba(52, 152, 219, 0.1);
      color: #3498db;
    }
    
    &.active {
      font-weight: 500;
      color: #3498db;
      background-color: rgba(52, 152, 219, 0.08);
    }
  }
  
  .divider {
    height: 24px;
    width: 1px;
    background-color: #e0e0e0;
    margin: 0 4px;
  }
  
  .search-input {
    font-family: "Inter", "Comfortaa", sans-serif;
    padding: 8px 16px;
    border: none;
    width: 100%;
    font-size: 15px;
    color: #2c3e50;
    background: transparent;
  }
  
  .search-input::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }
  
  .search-input:focus {
    outline: none;
  }
  
  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 48px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 4px;
    transition: transform 0.2s ease, background-color 0.3s ease;
    
    &:hover {
      background-color: #3498db;
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .search-container {
      height: 50px;
    }
    
    .selected-option {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      padding: 0 14px;
    }
    
    .search-input {
      font-size: 14px;
    }
    
    .search-button {
      min-width: 42px;
      height: 42px;
    }
  }
  
  @media (max-width: 480px) {
    .custom-dropdown {
      min-width: 110px;
    }
    
    .selected-option {
      font-size: 13px;
      padding: 0 12px;
    }
    
    .search-input::placeholder {
      font-size: 13px;
    }
  }
`;

export default SearchBar;