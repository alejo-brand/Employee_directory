/* eslint-disable no-unused-vars */
import React from "react";

function Search(props){
  return(
    <div className = "container">
      <div className="input-group mb-3 col-sm-4">
        <input type="text" name = "search" value = {props.search}  onChange = {props.handleInputChange} className="form-control" placeholder="Enter first Name" aria-label="Enter First Name" aria-describedby="button-addon2" />
      </div>
    </div>
  );
};

export default Search;