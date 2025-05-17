import React from 'react';
import styled from 'styled-components';
import { ChevronDown, X, MapPin, Home, DollarSign, Bed, Bath, Calendar } from 'lucide-react';

const FilterPanel = ({ 
  filterOptions, 
  priceRange, 
  setFilterOptions, 
  setPriceRange, 
  closeFilters,
  navigate
}) => {
  const handleInputChange = (e, field) => {
    setFilterOptions({
      ...filterOptions,
      [field]: e.target.value
    });
  };

  const handlePriceChange = (e, field) => {
    setPriceRange({
      ...priceRange,
      [field]: e.target.value
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (filterOptions.type) params.append('type', filterOptions.type);
    if (priceRange.min) params.append('minPrice', priceRange.min);
    if (priceRange.max) params.append('maxPrice', priceRange.max);
    if (filterOptions.bedrooms) params.append('bedrooms', filterOptions.bedrooms);
    if (filterOptions.bathrooms) params.append('bathrooms', filterOptions.bathrooms);
    if (filterOptions.tenure) params.append('tenure', filterOptions.tenure);
    if (filterOptions.dateAdded) params.append('dateAdded', filterOptions.dateAdded);
    if (filterOptions.where) params.append('where', filterOptions.where);
    
    navigate({ search: params.toString() });
    closeFilters();
  };

  const clearFilters = () => {
    setFilterOptions({
      type: '',
      bedrooms: '',
      bathrooms: '',
      tenure: '',
      dateAdded: '',
      where: ''
    });
    setPriceRange({ min: '', max: '' });
    navigate({ search: '' });
    closeFilters();
  };

  return (
    <StyledFilterPanel>
      <div className="filter-header">
        <h3>Refine Your Search</h3>
        <button className="close-btn" onClick={closeFilters}>
          <X size={20} />
        </button>
      </div>
      
      <div className="filters-grid">
        <div className="filter-group">
          <label>Location</label>
          <div className="input-with-icon">
            <MapPin size={18} />
            <input
              type="text"
              placeholder="City, neighborhood, or address"
              value={filterOptions.where}
              onChange={(e) => handleInputChange(e, 'where')}
            />
          </div>
        </div>
        
        <div className="filter-group">
          <label>Property Type</label>
          <div className="select-wrapper">
            <select
              value={filterOptions.type}
              onChange={(e) => handleInputChange(e, 'type')}
            >
              <option value="">Any Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>
        
        <div className="filter-group">
          <label>Price Range</label>
          <div className="price-inputs">
            <div className="input-with-icon">
              <DollarSign size={18} />
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange(e, 'min')}
              />
            </div>
            <span className="price-separator">to</span>
            <div className="input-with-icon">
              <DollarSign size={18} />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange(e, 'max')}
              />
            </div>
          </div>
        </div>
        
        <div className="filter-group">
          <label>Bedrooms</label>
          <div className="select-wrapper">
            <select
              value={filterOptions.bedrooms}
              onChange={(e) => handleInputChange(e, 'bedrooms')}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>
        
        <div className="filter-group">
          <label>Bathrooms</label>
          <div className="select-wrapper">
            <select
              value={filterOptions.bathrooms}
              onChange={(e) => handleInputChange(e, 'bathrooms')}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>
        
        <div className="filter-group">
          <label>Tenure</label>
          <div className="select-wrapper">
            <select
              value={filterOptions.tenure}
              onChange={(e) => handleInputChange(e, 'tenure')}
            >
              <option value="">Any</option>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>
        
        <div className="filter-group">
          <label>Date Added</label>
          <div className="select-wrapper">
            <select
              value={filterOptions.dateAdded}
              onChange={(e) => handleInputChange(e, 'dateAdded')}
            >
              <option value="">Any Time</option>
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="this-year">This Year</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
      
      <div className="filter-actions">
        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
        <button className="apply-btn" onClick={applyFilters}>Apply Filters</button>
      </div>
    </StyledFilterPanel>
  );
};

const StyledFilterPanel = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 24px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .filter-header h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #999;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .close-btn:hover {
    color: #333;
  }

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .filter-group label {
    font-size: 14px;
    font-weight: 500;
    color: #555;
  }

  .input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-with-icon input {
    width: 100%;
    padding: 10px 10px 10px 36px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.2s ease;
  }

  .input-with-icon svg {
    position: absolute;
    left: 10px;
    color: #999;
  }

  .input-with-icon input:focus {
    outline: none;
    border-color: #3498db;
  }

  .select-wrapper {
    position: relative;
  }

  .select-wrapper select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    appearance: none;
    background: #fff;
    transition: border-color 0.2s ease;
  }

  .select-wrapper svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
  }

  .select-wrapper select:focus {
    outline: none;
    border-color: #3498db;
  }

  .price-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .price-separator {
    color: #999;
    font-size: 14px;
  }

  .filter-actions {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 30px;
  }

  .clear-btn {
    background: transparent;
    border: 1px solid #ddd;
    color: #666;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clear-btn:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }

  .apply-btn {
    background: #3498db;
    border: none;
    color: #fff;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .apply-btn:hover {
    background: #2980b9;
  }

  @media (max-width: 768px) {
    .filters-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .price-inputs {
      flex-direction: column;
      gap: 10px;
    }

    .price-separator {
      display: none;
    }

    .filter-actions {
      flex-direction: column;
      gap: 10px;
    }

    .clear-btn, .apply-btn {
      width: 100%;
    }
  }
`;

export default FilterPanel;