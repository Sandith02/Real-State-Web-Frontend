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
      
      {/* Decorative elements */}
      <div className="decorative-elements">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
        <div className="decoration decoration-4"></div>
        
        <div className="floating-card card-1">
          <div className="card-icon">🏡</div>
          <div className="card-text">100+ Properties</div>
        </div>
        
        <div className="floating-card card-2">
          <div className="card-icon">⭐</div>
          <div className="card-text">Trusted by 50+ Clients</div>
        </div>
        
        <div className="floating-card card-3">
          <div className="card-icon">🔍</div>
          <div className="card-text">Easy Search</div>
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
  
  .decoration {
    position: absolute;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(50px);
  }
  
  .decoration-1 {
    width: 300px;
    height: 300px;
    background: rgba(52, 152, 219, 0.15);
    top: 10%;
    right: 15%;
    animation: float 15s infinite alternate ease-in-out;
  }
  
  .decoration-2 {
    width: 250px;
    height: 250px;
    background: rgba(52, 152, 219, 0.1);
    bottom: 20%;
    left: 10%;
    animation: float 18s infinite alternate-reverse ease-in-out;
  }
  
  .decoration-3 {
    width: 200px;
    height: 200px;
    background: rgba(44, 62, 80, 0.1);
    top: 60%;
    right: 20%;
    animation: float 12s infinite alternate ease-in-out;
  }
  
  .decoration-4 {
    width: 150px;
    height: 150px;
    background: rgba(44, 62, 80, 0.05);
    top: 30%;
    left: 5%;
    animation: float 20s infinite alternate-reverse ease-in-out;
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
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  .card-1 {
    top: 30%;
    right: 10%;
    animation-name: floatCard1;
  }
  
  .card-2 {
    bottom: 25%;
    left: 15%;
    animation-name: floatCard2;
  }
  
  .card-3 {
    top: 20%;
    left: 20%;
    animation-name: floatCard3;
  }
  
  .card-icon {
    font-size: 24px;
    margin-right: 12px;
  }
  
  .card-text {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #2c3e50;
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
  
  @keyframes floatCard1 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  @keyframes floatCard2 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
  }
  
  @keyframes floatCard3 {
    0%, 100% {
      transform: translateY(0) rotate(-2deg);
    }
    50% {
      transform: translateY(-20px) rotate(2deg);
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
    
    .decoration {
      filter: blur(40px);
    }
    
    .floating-card {
      padding: 12px;
      transform: scale(0.8);
    }
    
    .card-icon {
      font-size: 20px;
    }
    
    .card-text {
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
    
    .floating-card {
      display: none;
    }
  }
`;

export default Hero;