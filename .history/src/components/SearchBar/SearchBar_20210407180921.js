import { Button } from "@material-ui/core";
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="bgImage">
      <div >
        <h1 style={{textAlign:'center'}}>Find your best product</h1>
        <div className="search-bar">
          <input placeholder="Search house..." type="text" />
          <Button className='search-btn' color="secondary" variant="contained">
            Find Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
