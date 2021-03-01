import React from "react";

function Table (){
  return(
    <div className = "container">
      <table className="table table dark table-striped table-hover col-sm-8">
      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Email</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone</th>
          <th scope="col">Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};
export default Table