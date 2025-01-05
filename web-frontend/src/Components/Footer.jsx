import React from 'react';
import styled from 'styled-components';

// Importing icons from lucide-react
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <h1>abodiq</h1>
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
            <a href="https://facebook.com"><Facebook size={24} /></a>
            <a href="https://linkedin.com"><Linkedin size={24} /></a>
            <a href="https://instagram.com"><Instagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        <p>© 2024 abodiq inc. All rights reserved</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #ddd;

  .footer-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-logo h1 {
    font-size: 36px;
    color: #3498db;
    margin-bottom: 20px;
  }

  .quick-links h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .quick-links ul {
    list-style: none;
    padding: 0;
  }

  .quick-links ul li {
    margin: 10px 0;
  }

  .quick-links ul li a {
    color: #3498db;
    text-decoration: none;
  }

  .quick-links ul li a:hover {
    text-decoration: underline;
  }

  .contact-info p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }

  .social-icons a {
    margin: 0 10px;
    color: #3498db;
    text-decoration: none;
  }

  .social-icons a:hover {
    color: #2980b9;
  }

  .footer-text {
    margin-top: 20px;
    color: #777;
  }
`;

export default Footer;
