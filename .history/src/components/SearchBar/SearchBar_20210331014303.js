import { Button } from "@material-ui/core";
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="bgImage">
      <div className="search-bar">
        <h1>Find your best T-shirt</h1>
        <div className="search-bar">
          <input placeholder="Search house..." type="text" />
          <Button color="secondary" variant="contained">
            Find Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
