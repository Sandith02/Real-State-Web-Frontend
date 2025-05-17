import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Filter, MapPin, Home, DollarSign, Bed, ChevronDown, X, Heart } from 'lucide-react';
import FilterPanel from '../Components/FilterPanel';

const FilterBar = ({ activeFilters, queryParams, goToFavourites, totalProperties }) => {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    type: '',
    bedrooms: '',
    bathrooms: '',
    tenure: '',
    dateAdded: '',
    where: ''
  });
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Extract query parameters when component mounts or URL changes
  useEffect(() => {
    setFilterOptions({
      type: queryParams.get('type') || '',
      bedrooms: queryParams.get('bedrooms') || '',
      bathrooms: queryParams.get('bathrooms') || '',
      tenure: queryParams.get('tenure') || '',
      dateAdded: queryParams.get('dateAdded') || '',
      where: queryParams.get('where') || ''
    });
    
    setPriceRange({
      min: queryParams.get('minPrice') || '',
      max: queryParams.get('maxPrice') || ''
    });
  }, [queryParams]);

  return (
    <StyledFilterBar>
      <div className="filter-summary">
        <button className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
          <Filter size={18} />
          <span>Filters</span>
          {activeFilters > 0 && <span className="filter-count">{activeFilters}</span>}
        </button>
        
        <div className="active-filters">
          {filterOptions.where && (
            <div className="filter-chip">
              <MapPin size={14} />
              <span>{filterOptions.where}</span>
            </div>
          )}
          
          {filterOptions.type && (
            <div className="filter-chip">
              <Home size={14} />
              <span>{filterOptions.type}</span>
            </div>
          )}
          
          {(priceRange.min || priceRange.max) && (
            <div className="filter-chip">
              <DollarSign size={14} />
              <span>
                {priceRange.min ? `Rs.${priceRange.min}` : 'Rs.0'} - 
                {priceRange.max ? `Rs.${priceRange.max}` : 'Any'}
              </span>
            </div>
          )}
          
          {filterOptions.bedrooms && (
            <div className="filter-chip">
              <Bed size={14} />
              <span>{filterOptions.bedrooms} Beds</span>
            </div>
          )}
        </div>
        
        <div className="right-actions">
          <div className="results-count">
            <span>{totalProperties} properties</span>
          </div>
          
          <button className="view-favourites-btn" onClick={goToFavourites}>
            <Heart size={18} />
            <span>Favourites</span>
          </button>
        </div>
      </div>
      
      {filtersOpen && (
        <FilterPanel 
          filterOptions={filterOptions}
          priceRange={priceRange}
          setFilterOptions={setFilterOptions}
          setPriceRange={setPriceRange}
          closeFilters={() => setFiltersOpen(false)}
          navigate={navigate}
        />
      )}
    </StyledFilterBar>
  );
};

const StyledFilterBar = styled.div`
  max-width: 1440px;
  margin: -80px auto 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  z-index: 100;

  .filter-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    border: 1px solid #e0e0e0;
    color: #333;
    padding: 10px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filter-toggle:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }

  .filter-count {
    background: #3498db;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-left: 5px;
  }

  .active-filters {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f0f7ff;
    border: 1px solid #d0e3ff;
    color: #0066cc;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 13px;
  }

  .right-actions {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .results-count {
    font-size: 14px;
    color: #666;
  }

  .view-favourites-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #3498db;
    border: 1px solid #3498db;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .view-favourites-btn:hover {
    background: #3498db;
    color: #fff;
  }

  @media (max-width: 768px) {
    margin: -60px auto 30px;
    padding: 15px;

    .filter-summary {
      flex-direction: column;
      align-items: flex-start;
    }

    .right-actions {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 480px) {
    .filter-toggle, .view-favourites-btn {
      font-size: 12px;
      padding: 8px 12px;
    }

    .filter-chip {
      font-size: 11px;
      padding: 5px 10px;
    }
  }
`;

export default FilterBar;