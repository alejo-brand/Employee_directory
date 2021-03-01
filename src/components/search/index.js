/* eslint-disable no-unused-vars */
import React from "react";

function Search(){
  return(
    <div className = "container">
      <div className="input-group mb-3 col-sm-4">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
  );
};

export default Search;