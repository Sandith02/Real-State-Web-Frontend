import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Search, MapPin, Home, DollarSign, Bed, Bath, Calendar, Filter, ChevronDown, X } from 'lucide-react';

const AdvancedFilterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [filterValues, setFilterValues] = useState({
    where: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    tenure: '',
    dateAdded: ''
  });

  // Extract query parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilterValues({
      where: params.get('where') || '',
      type: params.get('type') || '',
      minPrice: params.get('minPrice') || '',
      maxPrice: params.get('maxPrice') || '',
      bedrooms: params.get('bedrooms') || '',
      bathrooms: params.get('bathrooms') || '',
      tenure: params.get('tenure') || '',
      dateAdded: params.get('dateAdded') || ''
    });
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    // Only add parameters that have values
    Object.entries(filterValues).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    
    navigate({ search: params.toString() });
    setExpanded(false);
  };

  const clearFilters = () => {
    setFilterValues({
      where: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      tenure: '',
      dateAdded: ''
    });
    navigate({ search: '' });
    setExpanded(false);
  };

  const quickSearch = () => {
    if (filterValues.where) {
      const params = new URLSearchParams();
      params.append('where', filterValues.where);
      navigate({ search: params.toString() });
    }
  };

  return (
    <StyledFilterSection expanded={expanded}>
      <div className="filter-container">
        <div className="filter-header">
          <h2>Find Your Dream Property</h2>
          <button 
            className="expand-toggle" 
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse filters" : "Expand filters"}
          >
            {expanded ? <X size={20} /> : <Filter size={20} />}
            <span>{expanded ? "Close" : "Filters"}</span>
          </button>
        </div>
        
        <div className="quick-search">
          <div className="search-input">
            <MapPin size={20} />
            <input
              type="text"
              name="where"
              placeholder="Where are you looking?"
              value={filterValues.where}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && quickSearch()}
            />
          </div>
          <button className="search-btn" onClick={quickSearch}>
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
        
        <div className={`advanced-filters ${expanded ? 'expanded' : ''}`}>
          <div className="filters-grid">
            <div className="filter-group">
              <label>Property Type</label>
              <div className="custom-select">
                <Home size={18} />
                <select 
                  name="type" 
                  value={filterValues.type}
                  onChange={handleInputChange}
                >
                  <option value="">Any Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="land">Land</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
            
            <div className="filter-group price-range">
              <label>Price Range</label>
              <div className="range-inputs">
                <div className="input-with-icon">
                  <DollarSign size={18} />
                  <input 
                    type="number" 
                    name="minPrice" 
                    placeholder="Min Price" 
                    value={filterValues.minPrice}
                    onChange={handleInputChange}
                  />
                </div>
                <span className="range-separator">to</span>
                <div className="input-with-icon">
                  <DollarSign size={18} />
                  <input 
                    type="number" 
                    name="maxPrice" 
                    placeholder="Max Price" 
                    value={filterValues.maxPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Bedrooms</label>
              <div className="custom-select">
                <Bed size={18} />
                <select 
                  name="bedrooms" 
                  value={filterValues.bedrooms}
                  onChange={handleInputChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
            
            <div className="filter-group">
              <label>Bathrooms</label>
              <div className="custom-select">
                <Bath size={18} />
                <select 
                  name="bathrooms" 
                  value={filterValues.bathrooms}
                  onChange={handleInputChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
            
            <div className="filter-group">
              <label>Tenure</label>
              <div className="custom-select">
                <Home size={18} />
                <select 
                  name="tenure" 
                  value={filterValues.tenure}
                  onChange={handleInputChange}
                >
                  <option value="">Buy or Rent</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
            
            <div className="filter-group">
              <label>Date Added</label>
              <div className="custom-select">
                <Calendar size={18} />
                <select 
                  name="dateAdded" 
                  value={filterValues.dateAdded}
                  onChange={handleInputChange}
                >
                  <option value="">Any Time</option>
                  <option value="last-week">Last Week</option>
                  <option value="last-month">Last Month</option>
                  <option value="this-year">This Year</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
          </div>
          
          <div className="filter-actions">
            <button className="clear-btn" onClick={clearFilters}>
              Clear All
            </button>
            <button className="apply-btn" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </StyledFilterSection>
  );
};

const StyledFilterSection = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: -80px;
  position: relative;
  z-index: 100;
  
  .filter-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    max-height: ${props => props.expanded ? '600px' : '180px'};
  }
  
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 30px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .filter-header h2 {
    font-size: 22px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
  }
  
  .expand-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: #3498db;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  
  .expand-toggle:hover {
    background: rgba(52, 152, 219, 0.1);
  }
  
  .quick-search {
    display: flex;
    gap: 15px;
    padding: 20px 30px;
    align-items: center;
  }
  
  .search-input {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .search-input svg {
    position: absolute;
    left: 15px;
    color: #7f8c8d;
  }
  
  .search-input input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    font-size: 15px;
    color: #34495e;
    transition: all 0.2s ease;
  }
  
  .search-input input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
  
  .search-input input::placeholder {
    color: #95a5a6;
  }
  
  .search-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #3498db;
    color: white;
    border: none;
    padding: 15px 25px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 120px;
    justify-content: center;
  }
  
  .search-btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(41, 128, 185, 0.2);
  }
  
  .advanced-filters {
    padding: 0 30px;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .advanced-filters.expanded {
    padding: 20px 30px 30px;
    max-height: 400px;
    opacity: 1;
  }
  
  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .filter-group label {
    font-size: 14px;
    font-weight: 500;
    color: #7f8c8d;
  }
  
  .custom-select {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .custom-select svg:first-child {
    position: absolute;
    left: 10px;
    color: #7f8c8d;
    z-index: 1;
  }
  
  .select-arrow {
    position: absolute;
    right: 10px;
    color: #7f8c8d;
    pointer-events: none;
  }
  
  .custom-select select {
    width: 100%;
    padding: 12px 30px 12px 35px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    font-size: 15px;
    color: #34495e;
    appearance: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .custom-select select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
  
  .price-range .range-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .input-with-icon {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  .input-with-icon svg {
    position: absolute;
    left: 10px;
    color: #7f8c8d;
  }
  
  .input-with-icon input {
    width: 100%;
    padding: 12px 12px 12px 35px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    color: #34495e;
    transition: all 0.2s ease;
  }
  
  .input-with-icon input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
  
  .range-separator {
    color: #95a5a6;
    font-size: 14px;
  }
  
  .filter-actions {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding-top: 20px;
    margin-top: 10px;
  }
  
  .clear-btn {
    background: transparent;
    border: 1px solid #e0e0e0;
    color: #7f8c8d;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .clear-btn:hover {
    background: #f8f9fa;
    border-color: #bdc3c7;
    color: #34495e;
  }
  
  .apply-btn {
    background: #3498db;
    border: none;
    color: white;
    padding: 12px 25px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .apply-btn:hover {
    background: #2980b9;
  }
  
  /* Media Queries */
  @media (max-width: 992px) {
    .filters-grid {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 15px;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 0 15px;
    
    .filter-container {
      max-height: ${props => props.expanded ? '800px' : '160px'};
    }
    
    .filter-header {
      padding: 15px 20px 10px;
    }
    
    .filter-header h2 {
      font-size: 18px;
    }
    
    .quick-search {
      padding: 15px 20px;
      flex-direction: column;
      gap: 10px;
    }
    
    .search-btn {
      width: 100%;
    }
    
    .filters-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    
    .price-range .range-inputs {
      flex-direction: column;
      gap: 10px;
    }
    
    .range-separator {
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

export default AdvancedFilterSection;