import React from 'react';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import bgImage from '../Assets/house21.jpeg';
import FilterSection from '../Components/FilterSection';

const PropertiesPage = () => {
  return (
    <StyledWrapper>
    <div className='image-background'>
      <div id='section-1'>
        <NavBar/>
        {/* Content for section 1 */}
        <div className="main-topic">
            Explore Your Dreams
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
    .main-topic {
    margin-top: 270px;
    font-size: 140px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
    mix-blend-mode: overlay;opacity: 0; 
    transform: translateY(-100%);
    animation: slideDown 5s ease forwards; 
}
@keyframes slideDown {
    0% {
        opacity: 0;
        transform: translateY(-100%); 
    }
    100% {
        opacity: 1;
        transform: translateY(0); 
    }
}
  #section-2{
  margin-top:50px;
  }
`;

export default PropertiesPage;
