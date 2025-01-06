import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FavouritePage = () => {
  const location = useLocation();
  const favouriteList = location.state?.favouriteList || []; // Access passed state

  return (
    <StyledWrapper>
      <div className="favourites">
        <h3>Favourite Properties</h3>
        {favouriteList.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          favouriteList.map((property) => (
            <div key={property.id} className="favourite-card">
              <img src={property.picture} alt={property.type} />
              <h4>{property.type}</h4>
              <p>Price: Rs. {property.price}</p>
              <p>Location: {property.location}</p>
            </div>
          ))
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .favourites {
    margin: 20px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .favourite-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export default FavouritePage;
