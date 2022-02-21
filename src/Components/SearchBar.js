import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ SearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    SearchSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSearchSubmit}>
        <div className="field">
          <label htmlFor="">Search here :</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
      {/* {this.state.term} */}
    </div>
  );
};

export default SearchBar;

// Youtube  public API
// AIzaSyA2QZBYm2kMpYJKfyFgX9kmr67DAiPveOo
