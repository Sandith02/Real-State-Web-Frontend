import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/abodiq logo.png';

// Importing icons from lucide-react
import { Facebook, Linkedin, Instagram } from 'lucide-react';
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
        <div className="nav-section">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>
        <div className="scroll-up">
          <button>
            <ChevronUp size={32} />
          </button>
        </div>
      </div>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />  
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#houses-rent-colombo">Houses for rent in Colombo</a></li>
            <li><a href="#apartments-rent-colombo">Apartments for rent in Colombo</a></li>
            <li><a href="#commercial-rent">Commercial properties for rent</a></li>
            <li><a href="#commercial-sale-unawatuna">Commercial properties for sale in Unawatuna</a></li>
            <li><a href="#houses-sale-galle">Houses for sale in Galle</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Address:</strong> No54, Imaduwa Road, Ahangama, Galle, Sri Lanka</p>
          <p><strong>Phone:</strong> +94 012 356 789</p>
          <p><strong>Find us on</strong></p>
          <div className="social-icons">
            <a href="https://facebook.com"><Facebook size={24} strokeWidth={1.5}/></a>
            <a href="https://linkedin.com"><Linkedin size={24} strokeWidth={1.5}/></a>
            <a href="https://instagram.com"><Instagram size={24} strokeWidth={1.5}/></a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        © 2024 abodiq inc. All rights reserved
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .content-container {
    margin-left: 215px;
    margin-right: 215px;
    padding: 50px;
    text-align: center;
    margin-top: -30px;
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
    margin-bottom: 0px;
  }

  .cta-section p {
    font-size: 30px;
    margin-bottom: 10px;
    color: #7f8c8d;
  }

  .cta-section button {
    padding: 12px 30px;
    background-color: rgb(21, 21, 21);
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
    margin-top:50px;
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
    margin-bottom: -50px;
  }

  .scroll-up button {
    font-size: 24px;
    background-color: transparent;
    border: none;
    color:rgb(45, 45, 45);
    cursor: pointer;
  }

  .footer-container {
    display: flex;
    position:relative;
    margin: 0 auto;
    align-items: flex-start; /* To align items to the top */
    flex-wrap: wrap; /* Allows items to wrap on smaller screens */
    padding: 40px;
    text-align: center;
    border-top: 2px solid rgb(36, 36, 36);
    margin-top:50px;
  }

  .logo {
    width: 200px;
    height: 200px;
    margin-top: 0px
  }

  .quick-links {
    display: flex;
    margin-left: 125px;
    flex-direction: column;
    align-items: center; /* Center the links */
    margin-top: 20px;
    text-align: center;
    flex: 1;
  }

  .quick-links h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-top: -15px;
    margin-bottom: 5px;
    font-family: 'Afacad Flux';
  }

  .quick-links ul {
    list-style: none;
    padding: 0;
    text-align: center;
    font-family: 'Afacad Flux';
  }

  .quick-links ul li {
    margin: 10px 0;
  }

  .quick-links ul li a {
    color:rgb(124, 124, 124);
    text-decoration: none;
  }

  .quick-links ul li a:hover {
    text-decoration: underline;
  }

  .contact-info {
    text-align: right;
  }

  .contact-info p {
    font-size: 14px;
    font-family: 'Afacad Flux';
    color: #333;
    margin: 5px 0;
    text-align: right;
  }

  .social-icons a {
    color: rgb(0, 25, 42);
    text-decoration: none;
    padding: 5px;
  }

  .social-icons a:hover {
    color: #2980b9;
  }

  .footer-text {
    margin-top: 20px;
    font-family: 'Afacad Flux';
    color:rgb(0, 0, 0);
    margin-bottom: -20px;
  }
  }
`;

export default EndContent;
