import React from 'react';
import styled from 'styled-components';
import WatermarkImage from '../Assets/abodiq logo.png';

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="watermark-container">
        <img src={WatermarkImage} alt="Watermark" className="watermark-image" />
      </div>
      <div className="sub-main-topic">
        Welcome to the World of Dreams
      </div>
      <div className="logo-title">
        abodiq
      </div>
      <div className='content-type1'>
        "adobiq" is your ultimate destination for finding the perfect home, whether you're looking
        to rent or buy. We simplify the home search process, making it seamless, efficient, 
        and stress-free. Our platform connects you with properties that align with your 
        dreams and desires, offering a wide range of options to fit every lifestyle. From 
        cozy apartments in vibrant neighborhoods to spacious family homes and luxury estates,
        "adobiq" has something for everyone. Browse diverse listings, compare features, and 
        find your ideal home all in one place. We're here to guide you through every step,
        ensuring that you make the best choice for your next move. Your perfect home is 
        just a click away with "adobiq."
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">+10</div>
          <div className="stat-label">Sellers</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">+100</div>
          <div className="stat-label">Properties</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">+50</div>
          <div className="stat-label">Users</div>
        </div>
      </div>
      <div className="explore-container">
        <div className="explore-text">Explore the Listings</div>
        <div className="explore-arrow">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>  
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  
  .watermark-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  .watermark-image {
    width: 50%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.05;
  }

  .sub-main-topic {
    font-size: 50px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(0, 0, 0);
    padding-top: 50px;
  }
  
  .logo-title {
    font-family: museoModerno;
    font-weight: 500;
    font-size: 50px;
    margin-top: 100px;
    color: rgb(0, 0, 0);
  }

  .content-type1 {
    font-family: Afacad Flux;
    font-weight: 200;
    font-size: 20px;
    text-align: left;
    padding: 0 215px;
    margin-top: 20px;
  }

  .stats-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 30px;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(0, 0, 0);
    font-family: "Afacad Flux", serif;
  }

  .stat-value {
    font-size: 48px;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }

  .stat-label {
    margin-left: 15px;
    font-size: 16px;
    font-weight: 500;
  }

  .explore-container {
    margin-top: auto;
    margin-bottom: 30px;
  }

  .explore-text {
    font-size: 20px;
    font-weight: 200;
    font-family: 'Afacad Flux', serif;
    margin-bottom: 10px;
  }

  .explore-arrow {
    margin-top: 10px;
    font-size: 50px;
    color: rgb(236, 9, 9);
    display: inline-block;
    cursor: pointer;
  }

  .explore-arrow:hover {
    color: #333;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .content-type1 {
      font-size: 16px;
      padding: 0 50px;
    }

    .stat-value {
      font-size: 36px;
    }

    .stat-label {
      font-size: 14px;
    }

    .explore-text {
      font-size: 18px;
    }

    .explore-arrow {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) {
    .content-type1 {
      font-size: 14px;
      padding: 0 20px;
    }

    .stat-value {
      font-size: 24px;
    }

    .stat-label {
      font-size: 12px;
    }

    .explore-text {
      font-size: 16px;
    }

    .explore-arrow {
      font-size: 30px;
    }
  }
`;

export default AboutSection;