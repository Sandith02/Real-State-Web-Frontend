// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Sample customer images and testimonials
// import customer1 from '../Assets/Person 01.jpeg';  // Correct path to customer1 image
// import customer2 from '../Assets/Person 02.jpeg';  // Correct path to customer2 image
// import customer3 from '../Assets/Person 03.jpeg';  // Correct path to customer3 image

// const Testimonials = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 0,
//       text: `"abodiq” made finding our dream home a breeze! The seamless process and diverse listings ensured we found the perfect match for our needs. Highly recommend for anyone looking to rent or buy!`,
//       name: "Lahiru Karunaratna, Galle",
//       image: customer1,
//     },
//     {
//       id: 1,
//       text: `"abodiq” helped us find the best place for our family! Their team was amazing, guiding us through every step, and we are so happy with our new home. Highly recommend this platform for anyone in the market.`,
//       name: "Nirosha Perera, Colombo",
//       image: customer3,
//     },
//     {
//       id: 2,
//       text: `"abodiq” was fantastic in providing options that fit our budget. The user experience is great, and we found exactly what we were looking for! Highly recommend it to anyone.`,
//       name: "Janith Fernando, Kandy",
//       image: customer2,
//     },
//   ];

//   return (
//     <StyledWrapper>
//       <div className="testimonial-section">
//         <h2>Testimonials</h2>
//         <p className="subheading">Let’s hear what our customers have to say</p>
//         <div className="testimonial-card">
//           <p className="testimonial-text">
//             {testimonials[activeTestimonial].text}
//           </p>
//           <div className="customer-info">
//             <p className="name">{testimonials[activeTestimonial].name}</p>
//             <div className="customer-photos">
//               {testimonials.map((testimonial) => (
//                 <img
//                   key={testimonial.id}
//                   src={testimonial.image}
//                   alt={`Customer ${testimonial.id}`}
//                   onClick={() => setActiveTestimonial(testimonial.id)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .testimonial-section {
//     font-family: 'Afacad Flux';
//     text-align: center;
//     margin-top: 50px;
//     padding: 40px;
//     margin-left: 215px;
//     margin-right: 215px;
//     background-color:rgb(255, 255, 255);
//     border-radius: 8px;
//   }

//   h2 {
//     font-size: 50px;
//     font-weight: 500;
//     color: #333;
//     margin-bottom: 10px;
//   }

//   .subheading {
//     font-size: 30px;
//     color: #777;
//     margin-bottom: 50px;
//   }

//   .testimonial-card {
//     padding: 20px;
//     border-radius: 10px;
//   }

//   .testimonial-text {
//     font-size: 25px;
//     font-weight: 200;
//     color: #555;
//     margin-bottom: 10px;
//     line-height: 1.5;
//   }

//   .customer-info {
//     margin-bottom: 20px;
//     font-size: 18px;
//     color: #333;
//   }

//   .name {
//     font-weight: bold;
//   }

//   .customer-photos {
//     margin-top: 15px;
//     display: flex;
//     justify-content: center;
//     margin-top: 20px;
//     gap: 10px;
//   }

//   .customer-photos img {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     object-fit: cover;
//     cursor: pointer;
//     transition: transform 0.3s ease;
//   }

//   .customer-photos img:hover {
//     transform: scale(1.1);
//   }
// `;

// export default Testimonials;

import React, { useState } from 'react';
import styled from 'styled-components';
import customer1 from '../Assets/Person 01.jpeg';
import customer2 from '../Assets/Person 02.jpeg';
import customer3 from '../Assets/Person 03.jpeg';
import { ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 0,
      text: `"abodiq" made finding our dream home a breeze! The seamless process and diverse listings ensured we found the perfect match for our needs. Highly recommend for anyone looking to rent or buy!`,
      name: "Lahiru Karunaratna",
      location: "Galle",
      image: customer1,
      color: "#2c3e50"
    },
    {
      id: 1,
      text: `"abodiq" helped us find the best place for our family! Their team was amazing, guiding us through every step, and we are so happy with our new home. Highly recommend this platform for anyone in the market.`,
      name: "Nirosha Perera",
      location: "Colombo",
      image: customer3,
      color: "#3498db"
    },
    {
      id: 2,
      text: `"abodiq" was fantastic in providing options that fit our budget. The user experience is great, and we found exactly what we were looking for! Highly recommend it to anyone.`,
      name: "Janith Fernando",
      location: "Kandy",
      image: customer2,
      color: "#8e44ad"
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <StyledWrapper>
      <div className="split-container">
        <div className="testimonial-header">
          <h2 className="main-title">What Our <br /><span>Clients Say</span></h2>
          <p className="subtitle">Real experiences from satisfied homeowners</p>
          
          <div className="testimonial-nav">
            <div className="nav-numbers">
              <span className="current">{(activeIndex + 1).toString().padStart(2, '0')}</span>
              <span className="separator">/</span>
              <span className="total">{testimonials.length.toString().padStart(2, '0')}</span>
            </div>
            
            <button className="next-button" onClick={nextTestimonial}>
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="testimonials-slider" style={{ background: testimonials[activeIndex].color }}>
          <div className="slider-content">
            <div className="testimonial-cards">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                  style={{ 
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                    opacity: index === activeIndex ? 1 : 0
                  }}
                >
                  <div className="quote">"</div>
                  <p className="testimonial-text">{testimonial.text.replace(/"/g, '')}</p>
                  
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h3 className="author-name">{testimonial.name}</h3>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 120px 0;
  
  .split-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;
  }
  
  /* Testimonial Header */
  .testimonial-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0;
  }
  
  .main-title {
    font-size: 52px;
    font-weight: 300;
    color: #2c3e50;
    line-height: 1.1;
    margin: 0 0 20px;
    
    span {
      font-weight: 600;
    }
  }
  
  .subtitle {
    font-size: 18px;
    color: #64748b;
    margin-bottom: 60px;
  }
  
  .testimonial-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }
  
  .nav-numbers {
    display: flex;
    align-items: baseline;
    
    .current {
      font-size: 28px;
      font-weight: 600;
      color: #2c3e50;
    }
    
    .separator {
      margin: 0 8px;
      color: #94a3b8;
      font-size: 20px;
    }
    
    .total {
      color: #94a3b8;
      font-size: 20px;
    }
  }
  
  .next-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: transparent;
    border: 1px solid #e2e8f0;
    color: #2c3e50;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #f8fafc;
      color: #3498db;
      border-color: #3498db;
      
      svg {
        transform: translateX(4px);
      }
    }
    
    svg {
      transition: transform 0.3s ease;
    }
  }
  
  /* Testimonials Slider */
  .testimonials-slider {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    color: white;
    transition: background 0.5s ease;
  }
  
  .slider-content {
    padding: 80px 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .testimonial-cards {
    position: relative;
    flex: 1;
    overflow: hidden;
  }
  
  .testimonial-card {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease, opacity 0.6s ease;
    
    &.active {
      z-index: 2;
    }
  }
  
  .quote {
    font-size: 100px;
    line-height: 0;
    margin-bottom: 40px;
    font-family: Georgia, serif;
    opacity: 0.4;
  }
  
  .testimonial-text {
    font-size: 26px;
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 40px;
    max-width: 80%;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .author-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(255, 255, 255, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .author-name {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 5px;
  }
  
  .author-location {
    font-size: 14px;
    opacity: 0.8;
    margin: 0;
  }
  
  .slider-indicators {
    display: flex;
    gap: 12px;
    margin-top: 60px;
  }
  
  .indicator {
    width: 40px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      background: white;
      width: 60px;
    }
    
    &:hover:not(.active) {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .split-container {
      gap: 30px;
    }
    
    .main-title {
      font-size: 44px;
    }
    
    .testimonial-text {
      font-size: 22px;
    }
  }
  
  @media (max-width: 992px) {
    padding: 80px 0;
    
    .split-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    .testimonial-header {
      padding: 0;
      text-align: center;
    }
    
    .subtitle {
      margin-bottom: 30px;
    }
    
    .slider-content {
      padding: 60px 40px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
    
    .split-container {
      padding: 0 20px;
    }
    
    .main-title {
      font-size: 36px;
    }
    
    .subtitle {
      font-size: 16px;
    }
    
    .testimonial-text {
      font-size: 18px;
      max-width: 100%;
    }
    
    .slider-content {
      padding: 40px 30px;
    }
  }
  
  @media (max-width: 576px) {
    .main-title {
      font-size: 30px;
    }
    
    .nav-numbers .current {
      font-size: 24px;
    }
    
    .quote {
      font-size: 70px;
      margin-bottom: 20px;
    }
    
    .testimonial-text {
      font-size: 16px;
    }
    
    .slider-content {
      padding: 30px 20px;
    }
  }
`;

export default Testimonials;