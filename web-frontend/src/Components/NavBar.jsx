// import React from 'react';
// import styled from 'styled-components';

// const NavBar = () => {
  
//   return (
//     <StyledNavbar>
//       <div className="navbar-container">
//         <div className="brand">abodiq</div>
//         <div className="nav-links">
//         <div className='nav-links-main'>
//           <a href="/" className="nav-item">Home</a>
//           <a href="/properties" className="nav-item">About</a>
//           <a href="/properties" className="nav-item">Properties</a>
//           <a href="#contact" className="nav-item">Contact Us</a>
//         </div>  
//           <button className="btn-login">Login</button>
//           <button className="btn-create-account">Create an account</button>
//         </div>
//       </div>
//     </StyledNavbar>
//   );
// };

// const StyledNavbar = styled.div`
//   .navbar-container {
//     height: 50px;
//     width: 1250px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 30px;
//     background-color: rgba(255, 255, 255, 0.1);
//     border-radius: 50px;
//     backdrop-filter: blur(10px);
//     position: relative;
//     top: 20px;
//     left: 20px;
//     right: 20px;
//     z-index: 100;
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//     left: 50%;  /* Center the container */
//     transform: translateX(-50%); /* Shift it back by 50% of its width */
//   }

//   .brand {
//     font-family: 'MuseoModerno', serif;
//     font-size: 1.5rem;
//     font-weight: 500;
//     color: white;
//   }
//  .brand a {
//     text-decoration: none;
//     color: white;
//   }
//   .nav-links {
//     display: flex;
//     gap: 20px;
//     align-items: center;
//   }

//   .nav-links-main {
//     align-items: center;
//     gap: 20px;
//     display: flex;
//     margin-right: 200px;
// }

//   .nav-item {
//     font-family: "Comfortaa", serif;
//     font-size: 1rem;
//     font-weight: 200;
//     color: white;
//     text-decoration: none;
//     cursor: pointer;
//   }

//   .nav-item:hover {
//     color:rgb(12, 66, 0);
//   }

//   .dropdown {
//     position: relative;
//   }

//   .dropdown-btn {    
//     font-family: "Comfortaa", serif;
//     font-size: 1rem;
//     font-weight: 200;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//   }

//   .dropdown-content {
//     font-family: "Comfortaa", serif;
//     font-size: 1rem;
//     font-weight: 200;
//     display: none;
//     position: absolute;
//     background-color: #fff;
//     min-width: 160px;
//     box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//   }

//   .dropdown:hover .dropdown-content {
//     display: block;
//   }

//   .dropdown-content a {
//     padding: 12px 16px;
//     text-decoration: none;
//     color: #333;
//     display: block;
//   }

//   .dropdown-content a:hover {
//     background-color: #ddd;
//   }

//   .btn-login,
//   .btn-create-account {
//     font-family: "Comfortaa", serif;
//     font-size: 0.8rem;
//     font-weight: 200;
//     padding: 8px 20px;
//     border-radius: 25px;
//     cursor: pointer;
//   }

//   .btn-login {
//     border: 1px solid white;
//     color: white;
//     background: none;
//   }

//   .btn-login:hover {
//     background-color: #333;
//     color: #fff;
//   }

//   .btn-create-account {
//     background-color: transparent;
//     color: white;
//     border: none;
//   }

//   .btn-create-account:hover {
//     color: #444;
//   }
// `;

// export default NavBar;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <StyledNavbar scrolled={scrolled}>
      <div className="navbar-container">
        <div className="brand">abodiq</div>
        
        <div className="nav-links-main">
          <a href="/" className="nav-item">Home</a>
          <a href="/about" className="nav-item">About</a>
          <a href="/properties" className="nav-item">Properties</a>
          <a href="#contact" className="nav-item">Contact Us</a>
        </div>
        
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-create-account">Create an account</button>
        </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.3s ease;
  
  .navbar-container {
    max-width: 1250px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${props => props.scrolled 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(255, 255, 255, 0.8)'};
    border-radius: 50px;
    box-shadow: ${props => props.scrolled 
      ? '0 10px 30px rgba(0, 0, 0, 0.08)' 
      : '0 4px 20px rgba(0, 0, 0, 0.05)'};
    backdrop-filter: blur(10px);
    transform: ${props => props.scrolled ? 'translateY(0)' : 'translateY(10px)'};
  }

  .brand {
    font-family: 'MuseoModerno', serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #2c3e50;
    background: linear-gradient(90deg, #2c3e50, #3498db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex: 1; /* Take up equal space */
  }

  .nav-links-main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex: 2; /* Take up twice the space to center the items */
  }

  .nav-item {
    font-family: "Comfortaa", serif;
    font-size: 0.9rem;
    font-weight: 400;
    color: #4a4a4a;
    text-decoration: none;
    position: relative;
    padding: 5px 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3498db, #2980b9);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: #3498db;
      
      &::after {
        width: 100%;
      }
    }
  }

  .auth-buttons {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    flex: 1; /* Take up equal space */
  }

  .btn-login,
  .btn-create-account {
    font-family: "Comfortaa", serif;
    font-size: 0.8rem;
    font-weight: 400;
    padding: 8px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .btn-login {
    border: 1px solid #3498db;
    color: #3498db;
    background: none;
    
    &:hover {
      background-color: #3498db;
      color: white;
    }
  }

  .btn-create-account {
    background-color: #2c3e50;
    color: white;
    border: none;
    
    &:hover {
      background-color: #34495e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(44, 62, 80, 0.2);
    }
  }
  
  @media (max-width: 1024px) {
    .nav-links-main {
      gap: 20px;
    }
    
    .btn-login, 
    .btn-create-account {
      padding: 8px 15px;
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 768px) {
    .navbar-container {
      padding: 0 20px;
    }
    
    .nav-links-main {
      display: none;
    }
    
    .brand {
      flex: 1;
    }
    
    .auth-buttons {
      flex: 1;
      gap: 10px;
    }
    
    .btn-login, 
    .btn-create-account {
      padding: 6px 12px;
      font-size: 0.7rem;
    }
  }
`;

export default NavBar;