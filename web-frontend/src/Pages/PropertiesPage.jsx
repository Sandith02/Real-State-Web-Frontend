import React from 'react';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import bgImage from '../Assets/House10.jpeg';
import FilterSection from '../Components/FilterSection';

const PropertiesPage = () => {
  return (
    <StyledWrapper>
    <div className='image-background'>
      <div id='section-1'>
        <NavBar/>
        <div className='main-title'>
        </div>
      </div>
      <div id='section-2'>
        <FilterSection/>
      </div>
    </div>  
    </StyledWrapper>
  );
}

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
  
    #section-1 {
      text-align: center;
      position: relative;
      height: 100vh; /* Full viewport height */
      width: 100%;
    }
  
    .image-background {
      background-image: url(${bgImage}); /* Apply background image */
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
  
`;

export default PropertiesPage;
