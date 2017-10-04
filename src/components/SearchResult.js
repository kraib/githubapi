import React from "react";

const SearchResult = ({ link, description, name }) => (
  <div className="col-xs-12 no-padding" style={{ marginBottom: 20 }}>
    <a href={link}>
      <span className="search-title">{name}</span>
    </a>
    <br />
    <span className="search-link">{link} </span>

    <span className="search-para">{description}</span>
  </div>
);
export default SearchResult;
