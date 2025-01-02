import React from 'react';
import VillaImage from '../Assets/Villa02.jpeg';  // Import the image

const HomePage = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${VillaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Full viewport height
      }}
    >
      <h1>Welcome to Our Homepage</h1>
      <p>This is where the main content of your application will be displayed.</p>
    </div>
  );
};
const StyledWrapper = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
   }
`;

export default HomePage;


