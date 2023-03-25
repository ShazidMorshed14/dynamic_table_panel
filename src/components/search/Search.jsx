import React from "react";
import "../search/Search.scss";

const Search = ({ setSearch }) => {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        className="search_input"
        placeholder="Search OID"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
