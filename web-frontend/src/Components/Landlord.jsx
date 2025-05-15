// import React from 'react';
// import styled from 'styled-components';

// // Import the icon from lucide-react
// import { SendHorizontal } from 'lucide-react';

// // Import the image (replace the placeholder path with the actual one)
// import landlordImage from '../Assets/Person 07.jpeg';  // Adjust path as needed

// const Landlord = () => {
//   return (
//     <StyledWrapper>
//       <div className="landlord-container">
//         <div className="text-section">
//           <h2>Are you a landlord?</h2>
//           <p>
//             We will guarantee a formidable price for your property. Ready to get started? Send us an email or contact us at +94 012 345 678 to list your property today.
//           </p>
//           <div className="input-container">
//             <input type="text" placeholder="Enter your contact info..." />
//             <button>
//               <SendHorizontal size={24} />
//             </button>
//           </div>
//         </div>
//         <div className="image-section">
//           <img src={landlordImage} alt="Landlord" />
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .landlord-container {
//     display: flex;
//     padding: 50px;
//     border-radius: 8px;
//     margin-left: 215px;
//     margin-right: 215px;
//     font-family: 'Afacad Flux';
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 10px;
//     margin-bottom: 50px;
//   }

//   .text-section {
//     flex: 1;
//     text-align: left;
//     padding-right: 20px;
//   }

//   .text-section h2 {
//     font-size: 40px;
//     color: #333;
//     font-weight: 500;
//     margin-bottom: 15px;
//   }

//   .text-section p {
//     font-size: 20px;
//     color: #555;
//     font-weight: 300;
//     margin-bottom: 25px;
//   }

//   .input-container {
//     display: flex;
//     align-items: center;
//     border: 1px solid rgb(54, 54, 54);
//     border-radius: 30px;
//     width: 450px;
//   }

//   .input-container input {
//     padding: 15px;
//     font-size: 15px;
//     margin-left: 20px;
//     width: 300px;
//     border: none;
//     outline: none;
//     flex-grow: 1;
//     border-radius: 8px;
//   }

//   .input-container button {
//     background-color: transparent;
//     color:rgb(25, 25, 25);
//     font-size: 20px;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 10px;
//   }

//   .input-container button:hover {
//     color: #45a049;
//   }

//   .image-section img {
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     object-fit: cover;
//   }

//   /* Media Queries */
//   @media (max-width: 768px) { /* Tablet */
//     .landlord-container {
//       flex-direction: column;
//       align-items: center;
//       margin-left: 50px;
//       margin-right: 50px;
//       padding: 30px;
//     }

//     .text-section {
//       text-align: center;
//       padding-right: 0;
//       margin-bottom: 20px;
//     }

//     .text-section h2 {
//       font-size: 32px;
//     }

//     .text-section p {
//       font-size: 18px;
//     }

//     .input-container {
//       width: 100%;
//       justify-content: center;
//     }

//     .input-container input {
//       width: 70%;
//     }

//     .image-section img {
//       width: 200px;
//       height: 200px;
//     }
//   }

//   @media (max-width: 480px) { /* Mobile */
//     .landlord-container {
//       flex-direction: column;
//       align-items: center;
//       margin-left: 20px;
//       margin-right: 20px;
//       padding: 20px;
//     }

//     .text-section {
//       text-align: center;
//       margin-bottom: 15px;
//     }

//     .text-section h2 {
//       font-size: 24px;
//     }

//     .text-section p {
//       font-size: 16px;
//     }

//     .input-container {
//       width: 100%;
//     }

//     .input-container input {
//       width: 65%;
//       padding: 10px;
//       font-size: 14px;
//     }

//     .image-section img {
//       width: 150px;
//       height: 150px;
//     }
//   }
// `;

// export default Landlord;


import React from 'react';
import styled from 'styled-components';
import { SendHorizontal, Check, Building, Shield, Award } from 'lucide-react';
import landlordImage from '../Assets/Person 07.jpeg';

const Landlord = () => {
  return (
    <StyledWrapper>
      <div className="landlord-section">
        <div className="content-container">
          <div className="text-column">
            <div className="section-tag">Property Owners</div>
            <h2 className="section-title">Maximize Your <br/>Property Value</h2>
            
            <p className="section-description">
              Join our exclusive network of distinguished property owners. 
              We guarantee premium valuations and connect you with qualified clients 
              seeking exceptional properties like yours.
            </p>
            
            <div className="benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Building size={20} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">Premium property listing</div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Shield size={20} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">Verified client network</div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Award size={20} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">Professional valuation</div>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-header">
                <span>Begin Your Partnership</span>
              </div>
              
              <div className="input-container">
                <input type="text" placeholder="Enter your contact information..." />
                <button className="submit-button">
                  <span>Submit</span>
                  <SendHorizontal size={18} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="contact-alternative">
                <span>Or call our dedicated property team: </span>
                <a href="tel:+94012345678">+94 012 345 678</a>
              </div>
            </div>
          </div>
          
          <div className="image-column">
            <div className="image-frame">
              <div className="image-container">
                <img src={landlordImage} alt="Property Expert" />
              </div>
              
              <div className="credentials">
                <div className="credential-name">Mark Anderson</div>
                <div className="credential-title">Head of Property Acquisitions</div>
              </div>
            </div>
            
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-value">200+</div>
                <div className="stat-label">Premium Properties</div>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .landlord-section {
    padding: 120px 0;
    background-color: #f8f9fa;
  }
  
  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  
  /* Text Column */
  .text-column {
    max-width: 600px;
  }
  
  .section-tag {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3498db;
    margin-bottom: 16px;
  }
  
  .section-title {
    font-size: 48px;
    font-weight: 300;
    color: #2c3e50;
    line-height: 1.1;
    margin: 0 0 30px;
    letter-spacing: -0.5px;
  }
  
  .section-description {
    font-size: 17px;
    line-height: 1.6;
    color: #64748b;
    margin-bottom: 40px;
    font-weight: 300;
  }
  
  /* Benefits */
  .benefits {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 50px;
  }
  
  .benefit-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .benefit-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 50%;
    color: #3498db;
  }
  
  .benefit-text {
    font-size: 15px;
    font-weight: 400;
    color: #2c3e50;
  }
  
  /* Contact Form */
  .contact-form {
    margin-top: 40px;
  }
  
  .form-header {
    margin-bottom: 20px;
    
    span {
      font-size: 16px;
      font-weight: 500;
      color: #2c3e50;
    }
  }
  
  .input-container {
    display: flex;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:focus-within {
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }
    
    input {
      flex: 1;
      padding: 16px 24px;
      border: none;
      font-size: 15px;
      color: #2c3e50;
      
      &:focus {
        outline: none;
      }
      
      &::placeholder {
        color: #94a3b8;
      }
    }
    
    .submit-button {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #2c3e50;
      color: white;
      border: none;
      padding: 16px 30px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #3498db;
      }
    }
  }
  
  .contact-alternative {
    margin-top: 16px;
    font-size: 14px;
    color: #64748b;
    
    a {
      color: #3498db;
      font-weight: 500;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  /* Image Column */
  .image-column {
    position: relative;
  }
  
  .image-frame {
    position: relative;
    max-width: 450px;
    margin-left: auto;
  }
  
  .image-container {
    position: relative;
    z-index: 2;
    border-radius: 4px;
    overflow: hidden;
    height: 500px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .credentials {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    z-index: 3;
  }
  
  .credential-name {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .credential-title {
    font-size: 14px;
    opacity: 0.9;
  }
  
  .stats-card {
    position: absolute;
    bottom: 50px;
    left: -50px;
    background: white;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 24px 30px;
    display: flex;
    align-items: center;
    z-index: 3;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }
  
  .stat-label {
    font-size: 12px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .stat-divider {
    width: 1px;
    height: 40px;
    background: #e2e8f0;
    margin: 0 30px;
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .content-container {
      gap: 50px;
    }
    
    .section-title {
      font-size: 40px;
    }
    
    .image-container {
      height: 450px;
    }
  }
  
  @media (max-width: 992px) {
    .landlord-section {
      padding: 80px 0;
    }
    
    .content-container {
      grid-template-columns: 1fr;
      gap: 60px;
    }
    
    .text-column {
      max-width: 100%;
    }
    
    .image-frame {
      margin: 0 auto;
    }
    
    .stats-card {
      left: 0;
      right: 0;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    .landlord-section {
      padding: 60px 0;
    }
    
    .content-container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: 36px;
    }
    
    .benefits {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .input-container {
      flex-direction: column;
      
      input {
        width: 100%;
      }
      
      .submit-button {
        width: 100%;
        justify-content: center;
      }
    }
    
    .image-container {
      height: 400px;
    }
  }
  
  @media (max-width: 576px) {
    .section-title {
      font-size: 30px;
    }
    
    .section-description {
      font-size: 16px;
    }
    
    .image-container {
      height: 350px;
    }
    
    .stats-card {
      bottom: 30px;
      padding: 20px;
      
      .stat-value {
        font-size: 20px;
      }
      
      .stat-label {
        font-size: 10px;
      }
      
      .stat-divider {
        margin: 0 20px;
      }
    }
  }
`;

export default Landlord;