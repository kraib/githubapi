import React from "react";
const Search = ({ onChange }) => (
  <div className="custom-search-input">
    <div className="input-group col-md-12">
      <input
        type="text"
        onChange={e => onChange(e.target.value)}
        className="  search-query form-control"
        placeholder="Search"
      />
      <span className="input-group-btn">
        <button className="btn btn-danger" type="button">
          <span className=" glyphicon glyphicon-search" />
        </button>
      </span>
    </div>
  </div>
);
export default Search;
