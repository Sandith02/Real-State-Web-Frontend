import React from 'react';
import styled from 'styled-components';

const EndContent = () => {
  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="title-section">
          <h1>abodiq</h1>
          <p>Your one-stop destination for property needs</p>
        </div>
        <div className="cta-section">
          <p>Request for more information</p>
          <button>Contact Us</button>
        </div>
        <div className="nav-section">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>
        <div className="scroll-up">
          <button>↑</button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
  text-align: center;

  .content-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .title-section {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    color: #2c3e50;
  }

  p {
    font-size: 20px;
    color: #7f8c8d;
  }

  .cta-section {
    margin-bottom: 40px;
  }

  .cta-section p {
    font-size: 18px;
    color: #7f8c8d;
  }

  .cta-section button {
    padding: 12px 30px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta-section button:hover {
    background-color: #2980b9;
  }

  .nav-section {
    margin-bottom: 40px;
  }

  .nav-section a {
    margin: 0 15px;
    font-size: 18px;
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-section a:hover {
    color: #2980b9;
  }

  .scroll-up {
    margin-top: 30px;
  }

  .scroll-up button {
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: #3498db;
    cursor: pointer;
  }
`;

export default EndContent;
