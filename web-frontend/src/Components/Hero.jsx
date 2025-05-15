import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar';
import NavBar from '../Components/NavBar';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <StyledHero scrolled={scrolled}>
      <div className="gradient-bg"></div>
      
      {/* Geometric decorative elements */}
      <div className="decorative-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-dots"></div>
        
        <div className="floating-card card-1">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-content">
            <div className="card-title">100+ Properties</div>
            <div className="card-subtitle">Find your perfect home</div>
          </div>
        </div>
        
        <div className="floating-card card-2">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.866 15 19 12.3137 19 9C19 5.68629 15.866 3 12 3C8.13401 3 5 5.68629 5 9C5 12.3137 8.13401 15 12 15Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-content">
            <div className="card-title">Trusted Service</div>
            <div className="card-subtitle">50+ happy clients</div>
          </div>
        </div>
        
        <div className="floating-card card-3">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-content">
            <div className="card-title">Easy Search</div>
            <div className="card-subtitle">Find in seconds</div>
          </div>
        </div>
      </div>
      
      <div className="content-container">
        <NavBar />
        
        <div className="hero-content">
          <div className="text-container">
            <div className="sub-topic">
              The Perfect Place to
            </div>
            <div className="main-topic">
              <span className="dark-text">Discover. Dream.</span> <span className="blue-text">Dwell.</span>
            </div>
          </div>
          
          <div className="search-container">
            <SearchBar />
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #f1f4f8 100%);
  
  .gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 50%, rgba(214, 240, 253, 0.5) 0%, rgba(255, 255, 255, 0) 50%);
    z-index: 0;
  }
  
  .decorative-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  
  .floating-circle {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(52, 152, 219, 0.2);
  }
  
  .circle-1 {
    width: 200px;
    height: 200px;
    top: 20%;
    right: 15%;
    animation: pulse 8s infinite alternate ease-in-out;
  }
  
  .circle-2 {
    width: 150px;
    height: 150px;
    bottom: 25%;
    left: 10%;
    animation: pulse 7s infinite alternate-reverse ease-in-out;
  }
  
  .floating-shape {
    position: absolute;
    opacity: 0.2;
  }
  
  .shape-1 {
    top: 15%;
    left: 15%;
    width: 100px;
    height: 100px;
    background: #3498db;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morph 10s infinite alternate ease-in-out;
  }
  
  .shape-2 {
    bottom: 20%;
    right: 20%;
    width: 120px;
    height: 120px;
    background: #2c3e50;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: morph 12s infinite alternate ease-in-out;
  }
  
  .floating-dots {
    position: absolute;
    top: 40%;
    right: 25%;
    width: 200px;
    height: 100px;
    background-image: radial-gradient(rgba(52, 152, 219, 0.2) 1px, transparent 1px);
    background-size: 12px 12px;
    animation: float 15s infinite alternate ease-in-out;
  }
  
  .floating-card {
    position: absolute;
    background: white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    z-index: 2;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.8);
    max-width: 240px;
  }
  
  .card-1 {
    top: 30%;
    right: 10%;
    animation: floatCard 6s infinite alternate ease-in-out;
  }
  
  .card-2 {
    bottom: 25%;
    left: 12%;
    animation: floatCard 7s infinite alternate-reverse ease-in-out;
  }
  
  .card-3 {
    top: 22%;
    left: 18%;
    animation: floatCard 8s infinite alternate ease-in-out;
  }
  
  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 12px;
    margin-right: 12px;
    flex-shrink: 0;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
  }
  
  .card-title {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 4px;
  }
  
  .card-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #6B7280;
  }
  
  .content-container {
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    z-index: 3;
  }
  
  .hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
  }
  
  .text-container {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .sub-topic {
    font-size: 32px;
    font-weight: normal;
    font-family: 'Afacad Flux', sans-serif;
    color: #6B7280;
    margin-bottom: 16px;
  }
  
  .main-topic {
    font-size: 80px;
    font-weight: 600;
    line-height: 1.1;
    font-family: 'Afacad Flux', sans-serif;
  }
  
  .dark-text {
    color: #2c3e50;
  }
  
  .blue-text {
    color: #3498db;
  }
  
  .search-container {
    width: 100%;
    max-width: 800px;
    margin: 20px 0 0;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6B7280;
    font-size: 14px;
    opacity: 0.8;
    animation: bounce 2s infinite;
    
    svg {
      margin-top: 8px;
      stroke: #6B7280;
    }
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(20px, 15px) scale(1.05);
    }
    100% {
      transform: translate(-15px, 10px) scale(0.95);
    }
  }
  
  @keyframes floatCard {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
  }
  
  @keyframes morph {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-10px) translateX(-50%);
    }
    60% {
      transform: translateY(-5px) translateX(-50%);
    }
  }
  
  @media (max-width: 1200px) {
    .main-topic {
      font-size: 70px;
    }
    
    .floating-card {
      transform: scale(0.9);
    }
    
    .card-1 {
      right: 5%;
    }
    
    .card-3 {
      left: 10%;
    }
  }
  
  @media (max-width: 768px) {
    .sub-topic {
      font-size: 24px;
    }
    
    .main-topic {
      font-size: 48px;
    }
    
    .floating-card {
      padding: 12px;
      transform: scale(0.8);
    }
    
    .card-icon {
      width: 40px;
      height: 40px;
    }
    
    .card-title {
      font-size: 14px;
    }
    
    .card-subtitle {
      font-size: 12px;
    }
    
    .content-container {
      padding: 0 20px;
    }
  }
  
  @media (max-width: 480px) {
    .sub-topic {
      font-size: 20px;
    }
    
    .main-topic {
      font-size: 36px;
    }
    
    .floating-card, .floating-circle, .floating-shape, .floating-dots {
      display: none;
    }
  }
`;

export default Hero;