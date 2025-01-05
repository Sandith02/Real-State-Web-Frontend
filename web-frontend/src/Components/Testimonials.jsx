import React, { useState } from 'react';
import styled from 'styled-components';

// Sample customer images and testimonials
import customer1 from '../Assets/Person 01.jpeg';  // Correct path to customer1 image
import customer2 from '../Assets/Person 02.jpeg';  // Correct path to customer2 image
import customer3 from '../Assets/Person 03.jpeg';  // Correct path to customer3 image

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: `"abodiq” made finding our dream home a breeze! The seamless process and diverse listings ensured we found the perfect match for our needs. Highly recommend for anyone looking to rent or buy!`,
      name: "Lahiru Karunaratna, Galle",
      image: customer1,
    },
    {
      id: 1,
      text: `"abodiq” helped us find the best place for our family! Their team was amazing, guiding us through every step, and we are so happy with our new home. Highly recommend this platform for anyone in the market.`,
      name: "Nirosha Perera, Colombo",
      image: customer2,
    },
    {
      id: 2,
      text: `"abodiq” was fantastic in providing options that fit our budget. The user experience is great, and we found exactly what we were looking for! Highly recommend it to anyone.`,
      name: "Janith Fernando, Kandy",
      image: customer3,
    },
  ];

  return (
    <StyledWrapper>
      <div className="testimonial-section">
        <h2>Testimonials</h2>
        <p className="subheading">Let’s hear what our customers have to say</p>
        <div className="testimonial-card">
          <p className="testimonial-text">
            {testimonials[activeTestimonial].text}
          </p>
          <div className="customer-info">
            <p className="name">{testimonials[activeTestimonial].name}</p>
            <div className="customer-photos">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={`Customer ${testimonial.id}`}
                  onClick={() => setActiveTestimonial(testimonial.id)}
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
  .testimonial-section {
    text-align: center;
    margin-top: 50px;
    padding: 40px;
    background-color: #f8f8f8;
    border-radius: 8px;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .subheading {
    font-size: 18px;
    color: #777;
    margin-bottom: 30px;
  }

  .testimonial-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .testimonial-text {
    font-size: 20px;
    font-weight: 300;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .customer-info {
    font-size: 18px;
    color: #333;
  }

  .name {
    font-weight: bold;
  }

  .customer-photos {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .customer-photos img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .customer-photos img:hover {
    transform: scale(1.1);
  }
`;

export default Testimonials;
