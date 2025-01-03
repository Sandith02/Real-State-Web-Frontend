import React from 'react';
import styled from 'styled-components';
import VillaImage from '../Assets/House6.jpeg';  // Import the image from the Assets folder
import SearchBar from '../Components/SearchBar'; 
import NavBar from '../Components/NavBar';  // Update the import path as needed

const HomePage = () => {
  return (
    <StyledWrapper>
        <div className="image-background"></div> {/* Separate div for image styling */}
        <div id="content-1">
          <NavBar />
          <div className="sub-topic">
            The Perfect Place to
          </div>
          <div className="main-topic">
            Discover. Dream. Dwell.
          </div>
          <div className="search-container">
            <SearchBar />
          </div>
        </div>
        <div id="content-2">
          <div className="sub-main-topic">
            Welcome to the World of Dreams
          </div>
          <div className="logo-title">
            The Perfect Place to
          </div>
          <div className='content-type1'>
          “abodiq” is your one-stop destination for finding the perfect home. Whether you're looking to rent or buy,
          we make the process seamless and stress-free. We aim to connect you with homes that match your 
          dreams and desires. From cozy apartments to spacious houses, our diverse listings cater to all your needs.
          </div>  
        </div>
       </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
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
    text-align: center;
    position: relative;
    height: 100vh; /* Full viewport height */
    width: 100%;
  }

  .image-background {
    background-image: url(${VillaImage}); /* Apply background image */
    background-size: cover;
    background-position: center;
    position: absolute;
    padding: 0; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    z-index: -1; /* Ensures image stays behind the content */
  }

  .content {
    position: relative;
    z-index: 1; /* Content stays above the background */
  }

  .sub-topic {
    margin-top: 300px;
    font-size: 64px;
    font-family: 'Afacad Flux';
    color: #d9d9d9;
    text-align: center;
    display: inline-block;
  }

  .main-topic {
    margin-top: -60px;
    font-size: 136px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
  }

  .search-container {
    margin-top: 50px;
  }
  #content-2 {
    text-align: center;
    position: relative;
    height: 100vh; /* Full viewport height */
    width: 100%;
  }






`;

export default HomePage;
