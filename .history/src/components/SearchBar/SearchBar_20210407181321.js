import { Button } from "@material-ui/core";
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="bgImage">
      <div className="search-bar-title">
        <h1>Find your best product</h1>
      </div>
      <div className="search-bar">
        <input placeholder="Search house..." type="text" />
        <Button className="search-btn" color="secondary" variant="contained">
          Find Now
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
