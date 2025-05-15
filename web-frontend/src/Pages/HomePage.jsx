import React from 'react';
import styled from 'styled-components';
import Hero from '../Components/Hero';
import AboutSection from '../Components/AboutSection';
import FilterSection from '../Components/FilterSection';
import SampleAds from '../Components/SampleAds';
import Testimonials from '../Components/Testimonials';
import Landlord from '../Components/Landlord';
import EndContent from '../Components/EndContent';

const HomePage = () => {
  return (
    <StyledWrapper>
      <Hero />
      <AboutSection />
      <div className="content-section">
        <FilterSection />
        <SampleAds />
        <Testimonials />
        <Landlord />
        <EndContent />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  
  /* Global reset to ensure no margin/padding anywhere */
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: "Afacad Flux", serif;
    color: white;
    text-align: center;
  }
 
  .content-section {
    width: 100%;
  }
  
  /* Ensure sections take full width */
  section {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default HomePage;