import React from 'react';
import styled from 'styled-components';
import VillaImage from '../Assets/House6.jpeg';  // Import the image from the Assets folder

const HomePage = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className='sub-topic'>
          The Perfect Place to
        </div>
        <div className='main-topic'>
          Discover. Dream. Dwell.
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Afacad Flux", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    background-image: url(${VillaImage}); /* Background image from the imported path */
    background-size: cover; /* Ensure the background image covers the full screen */
    background-position: center; /* Center the background image */
    color: white; 
    text-align: center; /* Center the text horizontally */
  }
  .content {
    z-index: 2; /* Ensure content is above the background image */
  }
  .sub-topic{
    position: relative;
    margin-top: 10px;
    font-size: 64px;
    font-family: 'Afacad Flux';
    color: #d9d9d9;
    text-align: center;
    display: inline-block;
  }
  .main-topic{
    margin-top: -60px;
    position: relative;
    font-size: 136px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color:rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
  }
 
`;

export default HomePage;
