import React from "react";

const SearchBox = ({ Searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba--green bg-lightest-blue"
        typr="search"
        placeholder="Search Rebots ..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
