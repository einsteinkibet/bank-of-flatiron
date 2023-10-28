import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div id='h2h1'>
      <h2>Search Transactions</h2>
      <input id='h2h'
        type="text"
        placeholder="Search by description..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;