import React from "react";
// eslint-disable-next-line no-unused-vars
function Header(){
  return(
    <div className="jumbotron jumbotron-fluid bg-dark text-light">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Search by Name or sort by category</p>
      </div>
    </div>
  );
}
export default Header;