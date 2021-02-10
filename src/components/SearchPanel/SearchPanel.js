import React from 'react';

const SearchPanel = ({ onSearchTextChange }) => {
  return (
    <div>
      <input type="text"
        placeholder="type in ..."
        onChange={(event) => onSearchTextChange(event.target.value)}
      />
    </div>
  );
};

export default SearchPanel;
