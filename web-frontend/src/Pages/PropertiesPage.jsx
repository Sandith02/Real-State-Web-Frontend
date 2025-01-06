import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import bgImage from '../Assets/house21.jpeg';
import bgImage2 from '../Assets/pattern3.jpeg';
import propertiesData from '../Properties.json';
import FilterSection from '../Components/FilterSection';
import EndContent from '../Components/EndContent';
import { Heart, Bed, Bath, Ruler } from 'lucide-react';

const PropertiesPage = ({ favouriteList, setFavouriteList }) => {
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
          <div className="main-topic">Explore Your Dreams
            <br />
            With Us
          </div>
        </div>
        <div id="section-2">
          <FilterSection />
          <div className="search-results">Search Results</div>
          <button className="view-favourites-btn" onClick={goToFavourites}>
            View Favourites
          </button>
          <div className="properties-list">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="listing-card">
                  <img src={property.picture} alt={property.type} />
                  <div className="favourite-button-container">
                    <button
                      className="favourite-btn"
                      onClick={() => addToFavourites(property)}
                    >
                      <Heart size={25} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="listing-info">
                    <div className='procard-title'>
                      {property.type} for {property.tenure}
                    </div>
                    <div className='card-des'>
                    {property.description}
                    </div>
                    <div className='card-loc'>
                    {property.location}
                    </div>
                    <div className='card-price'>
                    Rs.{property.price}
                    </div>
                    <div className="property-stats">
                      <span>
                        <Bed size={18} /> {property.bedrooms} Beds
                      </span>
                      <span>
                        <Bath size={18} /> {property.bathrooms} Baths
                      </span>
                      <span>
                        <Ruler size={18} /> {property.size} sq.ft
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No properties match your search criteria.</p>
            )}
          </div>
        </div>
        <EndContent />
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 50px 215px;
    justify-content: center;
  }
    .search-results{
     font-family: "Afacad Flux", serif;
     font-size:40px;
     margin-top:100px;
     font-weight:500;
     margin-bottom:-50px;
     margin-left:215px;
     }
  .listing-card {
    position: relative;
    background-image: url(${bgImage2});
    background-size: cover;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transition: all 0.3s ease-in-out;
    width: 300px;
  }

  .favourite-button-container {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;
  }
.view-favourites-btn {
  display: inline-block;
  margin-top: 0px; /* Add space from top */
  margin-right: 215px; /* Adjust based on container width */
  background-color:transparent;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 20px;
  font-family: 'Afacad Flux', serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  float: right; /* Align to the right */
}

.view-favourites-btn:hover {
  background-color:transparent;
  transform: scale(1.05);
  border-radius:50px;
}

  .favourite-btn {
    background-color: transparent;
    border: none;
    color: rgb(255, 255, 255);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .favourite-btn:hover {
    transform: scale(1.1);
    color: rgb(60, 60, 60);
  }
    .procard-title{
    font-size:30px;
    font-weight:500;
     color: rgb(237, 237, 237);
    margin-bottom:10px;
    }

    .card-des{
    font-size:15px;
    font-weight:300;
    margin-bottom:10px;
    color: rgb(209, 209, 209);
    }
    .card-loc{
     font-size:20px;
    font-weight:300;
    margin-bottom:30px;
    }

    .card-price{
     font-size:30px;
    font-weight:500;
    margin-bottom:15px;
    }
  .listing-card img {
    width: 100%;
    height: 200px;
    border-radius: 30px 30px 0 0;
    object-fit: cover;
  }

  .listing-info {
    padding: 15px;
    color: white;
    font-family: 'Afacad Flux', sans-serif;
  }

  .listing-info h3 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
  }

  .listing-info p {
    margin-bottom: 10px;
    font-size: 16px;
  }
      .property-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;
  }

  .property-stats span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
/* Tablet (max-width: 768px) */
  @media (max-width: 768px) {
    .properties-list {
      margin: 20px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .search-results {
      margin-left: 20px;
      font-size: 30px;
    }

    .view-favourites-btn {
      margin-right: 20px;
      font-size: 18px;
    }

    .listing-card {
      width: 250px;
    }
  }

  /* Mobile (max-width: 480px) */
  @media (max-width: 480px) {
    .properties-list {
      margin: 10px;
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .search-results {
      margin-left: 10px;
      font-size: 24px;
    }

    .view-favourites-btn {
      margin-right: 10px;
      font-size: 16px;
    }

    .listing-card {
      width: 100%;
    }

    .procard-title {
      font-size: 24px;
    }

    .card-price {
      font-size: 20px;
    }
  }
  
`;

export default PropertiesPage;
