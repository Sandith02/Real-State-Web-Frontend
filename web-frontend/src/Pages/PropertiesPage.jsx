import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import bgImage from '../Assets/house21.jpeg';
import propertiesData from '../Properties.json';
import FilterSection from '../Components/FilterSection';

const PropertiesPage = ({ favouriteList, setFavouriteList }) => { // Use props for favourites
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const selectedType = queryParams.get('type');
  const minPrice = parseInt(queryParams.get('minPrice'), 10);
  const maxPrice = parseInt(queryParams.get('maxPrice'), 10);
  const bedrooms = queryParams.get('bedrooms');
  const bathrooms = queryParams.get('bathrooms');
  const tenure = queryParams.get('tenure');
  const dateAdded = queryParams.get('dateAdded');
  const where = queryParams.get('where');

  useEffect(() => {
    const filtered = propertiesData.properties.filter((property) => {
      return (
        (!selectedType || property.type.toLowerCase() === selectedType) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!bedrooms || property.bedrooms === parseInt(bedrooms)) &&
        (!bathrooms || property.bathrooms === parseInt(bathrooms)) &&
        (!tenure || property.tenure.toLowerCase().trim() === tenure.toLowerCase().trim()) &&
        (!dateAdded || checkDateAdded(property.added, dateAdded)) &&
        (!where || property.location.toLowerCase().includes(where.toLowerCase()))
      );
    });
    setFilteredProperties(filtered);
  }, [location.search]);

  const checkDateAdded = (propertyDate, dateAdded) => {
    const dateMap = {
      'last-week': (new Date() - new Date(propertyDate)) / (1000 * 60 * 60 * 24) <= 7,
      'last-month': (new Date() - new Date(propertyDate)) / (1000 * 60 * 60 * 24) <= 30,
      'this-year': new Date().getFullYear() === new Date(propertyDate).getFullYear(),
    };
    return dateMap[dateAdded];
  };

  const addToFavourites = (property) => {
    if (!favouriteList.some((item) => item.id === property.id)) {
      setFavouriteList((prev) => [...prev, property]); // Update the global state
    }
  };

  const goToFavourites = () => {
    navigate('/favourites');
  };

  return (
    <StyledWrapper>
      <div className="image-background">
        <div id="section-1">
          <NavBar />
          <div className="main-topic">Explore Your Dreams</div>
        </div>
        <div id="section-2">
          <FilterSection />
          <div className="properties-list">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="listing-card">
                  <img src={property.picture} alt={property.type} />
                  <div className="listing-info">
                    <h3>
                      {property.type} for {property.tenure}
                    </h3>
                    <p>{property.description}</p>
                    <p>Location: {property.location}</p>
                    <p>Price: Rs.{property.price}</p>
                    <button onClick={() => addToFavourites(property)}>❤️ Favourite</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No properties match your search criteria.</p>
            )}
          </div>
          <button className="favourites-btn" onClick={goToFavourites}>
            View Favourites
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Afacad Flux", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }

  #section-1 {
    text-align: center;
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .image-background {
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .main-topic {
    margin-top: 270px;
    font-size: 140px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
    mix-blend-mode: overlay;
    opacity: 0;
    transform: translateY(-100%);
    animation: slideDown 3s ease forwards;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #section-2 {
    margin-top: 50px;
  }

  .properties-list {
    display: grid;
    margin-left: 215px;
    margin-right: 215px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 50px;
  }

  .listing-card {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 20px;
    text-align: left;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .listing-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }

  .listing-info {
    color: white;
    margin-top: 15px;
  }

  .listing-info h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .listing-info p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .listing-info a {
    color: #2980b9;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .listing-info a:hover {
    color: #3498db;
  }

  .listing-card img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  .no-results {
    font-size: 18px;
    color: #ccc;
    text-align: center;
    margin-top: 50px;
  }
`;

export default PropertiesPage;
