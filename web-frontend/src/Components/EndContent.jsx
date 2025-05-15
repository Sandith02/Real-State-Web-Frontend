// import React from 'react';
// import styled from 'styled-components';
// import logo from '../Assets/abodiq logo.png';

// // Importing icons from lucide-react
// import { Facebook, Linkedin, Instagram } from 'lucide-react';
// // Importing the circle-arrow-up icon from lucide-react
// import { ChevronUp } from 'lucide-react';

// const EndContent = () => {
//   return (
//     <StyledWrapper>
//       <div className="content-container">
//         <div className="title-section">
//           <h1>abodiq </h1>
//           <p>Your one-stop destination for property needs</p>
//         </div>
//         <div className="cta-section">
//           <p>Request for more information</p>
//           <button>Contact Us</button>
//         </div>
//         <div className="nav-section">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#explore">Explore</a>
//         </div>
//         <div className="scroll-up">
//           <button>
//             <ChevronUp size={32} />
//           </button>
//         </div>
//       </div>
//       <div className="footer-container">
//         {/* Logo */}
//         <div className="footer-logo">
//           <img src={logo} alt="Logo" className="logo" />  
//         </div>

//         {/* Quick Links */}
//         <div className="quick-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#houses-rent-colombo">Houses for rent in Colombo</a></li>
//             <li><a href="#apartments-rent-colombo">Apartments for rent in Colombo</a></li>
//             <li><a href="#commercial-rent">Commercial properties for rent</a></li>
//             <li><a href="#commercial-sale-unawatuna">Commercial properties for sale in Unawatuna</a></li>
//             <li><a href="#houses-sale-galle">Houses for sale in Galle</a></li>
//             <li><a href="#warehouse-rent-colombo">Warehouse for rent in Colombo</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="contact-info">
//           <p><strong>Address:</strong> No54, Imaduwa Road, Ahangama, Galle, Sri Lanka</p>
//           <p><strong>Email:</strong> adobiq.info@gmail.com</p>
//           <p><strong>Phone:</strong> +94 012 356 789</p>
//           <p><strong>Find us on</strong></p>
//           <div className="social-icons">
//             <a href="https://facebook.com"><Facebook size={24} strokeWidth={1.5}/></a>
//             <a href="https://linkedin.com"><Linkedin size={24} strokeWidth={1.5}/></a>
//             <a href="https://instagram.com"><Instagram size={24} strokeWidth={1.5}/></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Text */}
//       <div className="footer-text">
//         © 2024 abodiq inc. All rights reserved
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .content-container {
//     margin-left: 215px;
//     margin-right: 215px;
//     padding: 50px;
//     text-align: center;
//     margin-top: -30px;
//     max-width: 800px;
//     font-family: 'Afacad Flux';
//     margin: 0 auto;
//   }

//   .title-section {
//     margin-bottom: 50px;
//   }

//   h1 {
//     font-size: 55px;
//     font-weight: 500;
//     font-family: 'museoModerno';
//     color: rgb(0, 7, 6);
//   }

//   p {
//     font-size: 40px;
//     font-weight: 300;
//     color: #7f8c8d;
//   }

//   .cta-section {
//     margin-bottom: 0px;
//   }

//   .cta-section p {
//     font-size: 30px;
//     margin-bottom: 10px;
//     color: #7f8c8d;
//   }

//   .cta-section button {
//     padding: 12px 30px;
//     background-color: rgb(21, 21, 21);
//     color: white;
//     border: none;
//     border-radius: 50px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .cta-section button:hover {
//     background-color: #2980b9;
//   }

//   .nav-section {
//     margin-top:50px;
//   }

//   .nav-section a {
//     margin: 0 15px;
//     font-size: 18px;
//     color: rgb(137, 137, 137);
//     text-decoration: none;
//     transition: color 0.3s ease;
//   }

//   .nav-section a:hover {
//     color: #2980b9;
//   }

//   .scroll-up {
//     margin-top: 30px;
//     margin-bottom: -50px;
//   }

//   .scroll-up button {
//     font-size: 24px;
//     background-color: transparent;
//     border: none;
//     color:rgb(45, 45, 45);
//     cursor: pointer;
//   }

//   .footer-container {
//     display: flex;
//     position:relative;
//     margin: 0 auto;
//     align-items: flex-start; /* To align items to the top */
//     flex-wrap: wrap; /* Allows items to wrap on smaller screens */
//     padding: 40px;
//     text-align: center;
//     border-top: 2px solid rgb(36, 36, 36);
//     margin-top:50px;
//   }

//   .logo {
//     width: 250px;
//     height: 250px;
//     margin-top: 0px
//   }

//   .quick-links {
//     display: flex;
//     margin-left: 85px;
//     flex-direction: column;
//     align-items: center; /* Center the links */
//     margin-top: 20px;
//     text-align: center;
//     flex: 1;
//   }

//   .quick-links h3 {
//     font-size: 20px;
//     font-weight: bold;
//     color: #333;
//     margin-top: -15px;
//     margin-bottom: 5px;
//     font-family: 'Afacad Flux';
//   }

//   .quick-links ul {
//     list-style: none;
//     padding: 0;
//     text-align: center;
//     font-family: 'Afacad Flux';
//   }

//   .quick-links ul li {
//     margin: 10px 0;
//   }

//   .quick-links ul li a {
//     color:rgb(124, 124, 124);
//     text-decoration: none;
//   }

//   .quick-links ul li a:hover {
//     text-decoration: underline;
//   }

//   .contact-info {
//     text-align: right;
//   }

//   .contact-info p {
//     font-size: 14px;
//     font-family: 'Afacad Flux';
//     color: #333;
//     margin: 5px 0;
//     text-align: right;
//   }

//   .social-icons a {
//     color: rgb(0, 25, 42);
//     text-decoration: none;
//     padding: 5px;
//   }

//   .social-icons a:hover {
//     color: #2980b9;
//   }

//   .footer-text {
//     margin-top: 20px;
//     font-family: 'Afacad Flux';
//     color:rgb(0, 0, 0);
//     margin-bottom: -20px;
//   }
//   }

//   /* Media Queries */
//   @media (max-width: 768px) { /* Tablet */
//     .content-container {
//       margin-left: 50px;
//       margin-right: 50px;
//       padding: 30px;
//     }

//     h1 {
//       font-size: 40px;
//     }

//     p {
//       font-size: 30px;
//     }

//     .cta-section p {
//       font-size: 24px;
//     }

//     .cta-section button {
//       padding: 10px 20px;
//       font-size: 14px;
//     }

//     .footer-container {
//       flex-direction: column;
//       padding: 30px;
//     }

//     .logo {
//       width: 200px;
//       height: 200px;
//     }

//     .quick-links h3 {
//       font-size: 18px;
//     }

//     .quick-links ul li a {
//       font-size: 14px;
//     }

//     .contact-info p {
//       font-size: 12px;
//     }
//   }

//   @media (max-width: 480px) { /* Mobile */
//     .content-container {
//       margin-left: 20px;
//       margin-right: 20px;
//       padding: 20px;
//     }

//     h1 {
//       font-size: 32px;
//     }

//     p {
//       font-size: 24px;
//     }

//     .cta-section p {
//       font-size: 18px;
//     }

//     .cta-section button {
//       padding: 8px 15px;
//       font-size: 12px;
//     }

//     .footer-container {
//       flex-direction: column;
//       padding: 20px;
//     }

//     .logo {
//       width: 150px;
//       height: 150px;
//     }

//     .quick-links h3 {
//       font-size: 16px;
//     }

//     .quick-links ul li a {
//       font-size: 12px;
//     }

//     .contact-info p {
//       font-size: 10px;
//     }
//   }
// `;

// export default EndContent;


import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/abodiq logo.png';
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  ChevronUp, 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';

const EndContent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledWrapper>
      <div className="pre-footer">
        <div className="content-container">
          <div className="cta-box">
            <div className="cta-left">
              <div className="brand-signature">
                <div className="brand-name">abodiq</div>
                <div className="brand-tagline">Exceptional Properties. Extraordinary Service.</div>
              </div>
            </div>
            
            <div className="cta-right">
              <div className="cta-text">Interested in premium real estate opportunities?</div>
              <button className="cta-button">
                <span>Connect With Us</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="main-footer">
        <div className="content-container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logo} alt="abodiq" className="footer-logo" />
              <p className="footer-description">
                Your distinguished partner for exceptional property solutions, 
                offering an exclusive portfolio of premium real estate opportunities 
                throughout Sri Lanka.
              </p>
              
              <div className="scroll-to-top" onClick={scrollToTop}>
                <div className="scroll-button">
                  <ChevronUp size={20} strokeWidth={1.5} />
                </div>
                <span>Back to Top</span>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-column">
                <h3 className="column-title">Navigate</h3>
                <ul className="link-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/properties">Properties</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="link-column">
                <h3 className="column-title">Property Types</h3>
                <ul className="link-list">
                  <li><a href="/properties?type=houses">Residential</a></li>
                  <li><a href="/properties?type=apartments">Apartments</a></li>
                  <li><a href="/properties?type=commercial">Commercial</a></li>
                  <li><a href="/properties?type=land">Land</a></li>
                </ul>
              </div>
              
              <div className="link-column">
                <h3 className="column-title">Popular Searches</h3>
                <ul className="link-list">
                  <li><a href="/properties?location=colombo">Houses in Colombo</a></li>
                  <li><a href="/properties?location=galle">Properties in Galle</a></li>
                  <li><a href="/properties?type=commercial&location=colombo">Commercial in Colombo</a></li>
                  <li><a href="/properties?tenure=sale">Properties for Sale</a></li>
                </ul>
              </div>
              
              <div className="link-column contact-column">
                <h3 className="column-title">Contact</h3>
                <ul className="contact-list">
                  <li>
                    <div className="contact-icon"><MapPin size={18} strokeWidth={1.5} /></div>
                    <div className="contact-text">No54, Imaduwa Road, Ahangama, Galle, Sri Lanka</div>
                  </li>
                  <li>
                    <div className="contact-icon"><Mail size={18} strokeWidth={1.5} /></div>
                    <div className="contact-text">adobiq.info@gmail.com</div>
                  </li>
                  <li>
                    <div className="contact-icon"><Phone size={18} strokeWidth={1.5} /></div>
                    <div className="contact-text">+94 012 356 789</div>
                  </li>
                </ul>
                
                <div className="social-container">
                  <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                  <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">© 2024 abodiq inc. All rights reserved</div>
            
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Pre-Footer Section */
  .pre-footer {
    background-color: #f8f9fa;
    padding: 60px 0;
  }
  
  .cta-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    background: linear-gradient(to right, #f8f9fa, #ffffff);
    border: 1px solid #e2e8f0;
  }
  
  .brand-signature {
    display: flex;
    flex-direction: column;
  }
  
  .brand-name {
    font-family: 'MuseoModerno', serif;
    font-size: 44px;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  .brand-tagline {
    font-size: 16px;
    font-weight: 300;
    color: #64748b;
    letter-spacing: 0.5px;
  }
  
  .cta-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .cta-text {
    font-size: 18px;
    font-weight: 300;
    color: #2c3e50;
    margin-bottom: 16px;
  }
  
  .cta-button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 30px;
    background: #2c3e50;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #3498db;
      
      svg {
        transform: translateX(4px);
      }
    }
    
    svg {
      transition: transform 0.3s ease;
    }
  }
  
  /* Main Footer */
  .main-footer {
    background: #f8fafc;
    padding: 80px 0 40px;
  }
  
  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
  }
  
  .footer-top {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    gap: 80px;
    margin-bottom: 60px;
  }
  
  .footer-brand {
    display: flex;
    flex-direction: column;
  }
  
  .footer-logo {
    width: 150px;
    height: auto;
    margin-bottom: 24px;
  }
  
  .footer-description {
    font-size: 15px;
    line-height: 1.6;
    color: #64748b;
    margin-bottom: 40px;
  }
  
  .scroll-to-top {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-top: auto;
    align-self: flex-start;
    
    .scroll-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: white;
      border: 1px solid #e2e8f0;
      color: #64748b;
      transition: all 0.3s ease;
    }
    
    span {
      font-size: 14px;
      color: #64748b;
      font-weight: 500;
    }
    
    &:hover {
      .scroll-button {
        background: #3498db;
        color: white;
        border-color: #3498db;
      }
      
      span {
        color: #3498db;
      }
    }
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  
  .column-title {
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 24px;
    letter-spacing: 0.5px;
  }
  
  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 16px;
    }
    
    a {
      font-size: 15px;
      color: #64748b;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #3498db;
      }
    }
  }
  
  .contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .contact-icon {
      color: #3498db;
    }
    
    .contact-text {
      font-size: 15px;
      color: #64748b;
    }
  }
  
  .social-container {
    display: flex;
    gap: 16px;
    margin-top: 24px;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid #e2e8f0;
    color: #64748b;
    transition: all 0.3s ease;
    
    &:hover {
      background: #3498db;
      color: white;
      border-color: #3498db;
    }
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid #e2e8f0;
  }
  
  .copyright {
    font-size: 14px;
    color: #64748b;
  }
  
  .legal-links {
    display: flex;
    gap: 24px;
    
    a {
      font-size: 14px;
      color: #64748b;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #3498db;
      }
    }
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .cta-box {
      padding: 40px;
    }
    
    .brand-name {
      font-size: 36px;
    }
    
    .footer-top {
      gap: 60px;
    }
  }
  
  @media (max-width: 992px) {
    .pre-footer {
      padding: 40px 0;
    }
    
    .cta-box {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
    
    .cta-right {
      align-items: flex-start;
    }
    
    .footer-top {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-column {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 768px) {
    .main-footer {
      padding: 60px 0 30px;
    }
    
    .content-container {
      padding: 0 20px;
    }
    
    .brand-name {
      font-size: 32px;
    }
    
    .cta-text {
      font-size: 16px;
    }
  }
  
  @media (max-width: 576px) {
    .cta-box {
      padding: 30px;
    }
    
    .footer-links {
      grid-template-columns: 1fr;
    }
    
    .contact-column {
      grid-column: 1;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
    
    .legal-links {
      justify-content: center;
    }
  }
`;

export default EndContent;