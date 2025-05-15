import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="about-container">
        <div className="left-column">
          <div className="section-intro">
            <span className="section-tag">About</span>
            <h2 className="section-title">Welcome to <br/>the World of Dreams</h2>
            <div className="brand-signature">abodiq</div>
          </div>
          
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Sellers</div>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat-item">
              <div className="stat-value">100+</div>
              <div className="stat-label">Properties</div>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Users</div>
            </div>
          </div>
        </div>
        
        <div className="right-column">
          <div className="content-description">
            <p>
              "abodiq" is your ultimate destination for finding the perfect home, whether you're looking
              to rent or buy. We simplify the home search process, making it seamless, efficient, 
              and stress-free.
            </p>
            <p>
              Our platform connects you with properties that align with your 
              dreams and desires, offering a wide range of options to fit every lifestyle. From 
              cozy apartments in vibrant neighborhoods to spacious family homes and luxury estates,
              "abodiq" has something for everyone.
            </p>
            <p>
              Browse diverse listings, compare features, and 
              find your ideal home all in one place. We're here to guide you through every step,
              ensuring that you make the best choice for your next move.
            </p>
            <div className="content-tagline">Your perfect home is just a click away.</div>
          </div>
          
          <div className="explore-link">
            <span>Explore the Listings</span>
            <div className="arrow-icon">→</div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 120px 0;
  
  .about-container {
    width: 100%;
    max-width: 1300px;
    padding: 0 60px;
    display: flex;
    gap: 80px;
  }
  
  .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .section-intro {
    margin-bottom: 60px;
  }
  
  .section-tag {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #3498db;
    margin-bottom: 24px;
    position: relative;
    padding-left: 30px;
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 20px;
      height: 1px;
      background-color: #3498db;
    }
  }
  
  .section-title {
    font-size: 48px;
    font-weight: 300;
    color: #2c3e50;
    line-height: 1.2;
    margin-bottom: 24px;
    font-family: 'Afacad Flux', sans-serif;
  }
  
  .brand-signature {
    font-family: 'MuseoModerno', sans-serif;
    font-size: 60px;
    font-weight: 400;
    color: #2c3e50;
    opacity: 0.9;
  }
  
  .stats-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: auto;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
  }
  
  .vertical-divider {
    width: 1px;
    height: 70px;
    background-color: rgba(44, 62, 80, 0.2);
    margin: 0 30px 0 0;
  }
  
  .stat-value {
    font-size: 42px;
    font-weight: 200;
    color: #2c3e50;
    margin-bottom: 8px;
  }
  
  .stat-label {
    font-size: 14px;
    font-weight: 400;
    color: #3498db;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .content-description {
    max-width: 580px;
    
    p {
      font-size: 16px;
      line-height: 1.8;
      color: #4a5568;
      margin-bottom: 24px;
      font-weight: 300;
    }
  }
  
  .content-tagline {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: #3498db;
    margin: 40px 0;
    border-left: 2px solid #3498db;
    padding-left: 20px;
  }
  
  .explore-link {
    display: flex;
    align-items: center;
    margin-top: auto;
    cursor: pointer;
    align-self: flex-start;
    
    span {
      font-size: 16px;
      font-weight: 400;
      color: #2c3e50;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-right: 16px;
      transition: color 0.3s ease;
    }
    
    .arrow-icon {
      font-size: 24px;
      color: #3498db;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      span {
        color: #3498db;
      }
      
      .arrow-icon {
        transform: translateX(10px);
      }
    }
  }
  
  @media (max-width: 1200px) {
    .about-container {
      padding: 0 40px;
      gap: 60px;
    }
    
    .section-title {
      font-size: 42px;
    }
    
    .brand-signature {
      font-size: 48px;
    }
    
    .stat-value {
      font-size: 36px;
    }
  }
  
  @media (max-width: 992px) {
    padding: 100px 0;
    
    .about-container {
      flex-direction: column;
      gap: 60px;
    }
    
    .left-column, .right-column {
      width: 100%;
    }
    
    .content-description {
      max-width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
    
    .about-container {
      padding: 0 30px;
    }
    
    .section-title {
      font-size: 36px;
    }
    
    .brand-signature {
      font-size: 40px;
    }
    
    .vertical-divider {
      height: 50px;
      margin: 0 20px 0 0;
    }
    
    .stat-item {
      padding-right: 20px;
    }
    
    .stat-value {
      font-size: 32px;
    }
    
    .stat-label {
      font-size: 12px;
    }
  }
  
  @media (max-width: 576px) {
    padding: 60px 0;
    
    .about-container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: 30px;
    }
    
    .stats-row {
      flex-wrap: wrap;
    }
    
    .stat-item {
      margin-bottom: 30px;
    }
    
    .vertical-divider {
      display: none;
    }
  }
`;

export default AboutSection;