import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for restaurants or dishes..." />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
