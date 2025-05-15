import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../Assets/abodiq logo.png'; // Update this path to your actual logo

const LoadingPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Set for 6 seconds (60 steps, 100ms each)
    const totalSteps = 60;
    const stepTime = 100;
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        // Increment proportionally to reach 100 in exactly 60 steps
        const increment = 100 / totalSteps;
        if (prev < 100) {
          return Math.min(prev + increment, 100);
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, stepTime);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      <div className="loader">
        <div className="brandContainer">
          <div className="loaderText">
            abodiq
          </div>
          <img src={logo} alt="abodiq logo" className="logo" />
        </div>
        
        <div className="progressContainer">
          <div 
            className="progressBar"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        
        <div className="statusText">
          {loadingProgress < 100 ? 'Loading your experience...' : 'Ready...'}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1000;
  
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .brandContainer {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .loaderText {
    font-family: "MuseoModerno", serif;
    font-size: 36px;
    font-weight: 500;
    color: #333;
    margin-right: 16px;
    letter-spacing: 0.5px;
    animation: gentlePulse 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  
  .logo {
    width: 45px;
    height: 45px;
    animation: gentlePulse 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
    will-change: transform;
  }
  
  .progressContainer {
    width: 300px;
    height: 2px;
    background-color: #f0f0f0;
    position: relative;
    overflow: hidden;
    border-radius: 1px;
  }
  
  .progressBar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #333;
    transition: width 0.1s linear;
  }
  
  .statusText {
    margin-top: 24px;
    font-size: 16px;
    color: #777;
    font-weight: 400;
  }
  
  @keyframes gentlePulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default LoadingPage;