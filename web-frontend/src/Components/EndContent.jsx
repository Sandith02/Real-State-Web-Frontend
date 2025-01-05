import React from 'react';
import styled from 'styled-components';

// Importing the circle-arrow-up icon from lucide-react
import { ChevronUp } from 'lucide-react';

const EndContent = () => {
  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="title-section">
          <h1>abodiq </h1>
          <p>Your one-stop destination for property needs</p>
        </div>
        <div className="cta-section">
          <p>Request for more information</p>
          <button>Contact Us</button>
        </div>
        <div className="scroll-up">
          <button>
            <ChevronUp size={32} />
          </button>
        </div>
        <div className="nav-section">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-left: 215px;
  margin-right: 215px;
  padding: 50px;
  text-align: center;
  margin-top: -30px;

  .content-container {
    max-width: 800px;
    font-family: 'Afacad Flux';
    margin: 0 auto;
  }

  .title-section {
    margin-bottom: 50px;
  }

  h1 {
    font-size: 55px;
    font-weight: 500;
    font-family: 'museoModerno';
    color: rgb(0, 7, 6);
  }

  p {
    font-size: 40px;
    font-weight: 300;
    color: #7f8c8d;
  }

  .cta-section {
    margin-bottom: 40px;
  }

  .cta-section p {
    font-size: 30px;
    margin-bottom: 10px;
    color: #7f8c8d;
  }

  .cta-section button {
    padding: 12px 30px;
    background-color: rgb(0, 103, 114);
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
    margin-bottom: -40px;
  }

  .nav-section a {
    margin: 0 15px;
    font-size: 18px;
    color: rgb(137, 137, 137);
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
    color:rgb(84, 84, 84);
    cursor: pointer;
  }
`;

export default EndContent;
