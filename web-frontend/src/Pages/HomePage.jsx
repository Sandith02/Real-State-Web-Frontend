import React from 'react';
import styled from 'styled-components';
import VillaImage from '../Assets/House6.jpeg';  // Import the image from the Assets folder
import SearchBar from '../Components/SearchBar'; 
import NavBar from '../Components/NavBar';  // Update the import path as needed

const HomePage = () => {
  return (
    <StyledWrapper>
    <div>
      <NavBar />
    </div>
      <div id='content-1'>
        <div className='sub-topic'>
          The Perfect Place to
        </div>
        <div className='main-topic'>
          Discover. Dream. Dwell.
        </div>
        <div className='search-container'>
          <SearchBar />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  *{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  body {
    font-family: "Afacad Flux", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; 
    text-align: center; /* Center the text horizontally */
  }
  #content-1 {
    position: relative;
    min-height: fit-content;
    text-align: center;
    background-image: url(${VillaImage}); /* Background image from the imported path */
    background-size: cover; /* Ensure the background image covers the full screen */
    background-position: center; /* Center the background image */
    height: 100vh; /* Ensure the container takes up the full viewport height */
    margin: 0; /* Remove any margin around the content */
    padding: 0; /* Remove any padding */
  }
  .sub-topic{
    position: relative;
    margin-top: 300px;
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
  .search-container{
    margin-top: 50px;
  }
  
`;

export default HomePage;
