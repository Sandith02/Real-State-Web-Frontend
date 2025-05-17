import React from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';

const NoResults = ({ clearFilters }) => {
  return (
    <StyledNoResults>
      <Search size={48} />
      <p>No properties match your search criteria.</p>
      <button className="clear-search-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </StyledNoResults>
  );
};

const StyledNoResults = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  svg {
    color: #ccc;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
  }

  .clear-search-btn {
    background: #3498db;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clear-search-btn:hover {
    background: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    svg {
      width: 36px;
      height: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export default NoResults;