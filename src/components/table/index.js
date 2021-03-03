import React from "react";
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const arrows = <FontAwesomeIcon icon = {faArrowsAltV}/>

function Table (props){
  return(
    <div className = "container">
      <table className="table table-dark table-striped table-hover col-sm-10">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col" onClick = {props.handleSortChange}>First  {arrows}</th>
          <th scope="col">Last</th>
          <th scope="col">Phone</th>
          <th scope="col">Picture</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>{props.employees.length > 0 ? props.employees.map(employee => {
        return(
          <tr>

            <td>{employee.email}</td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td><img src ={employee.picture.thumbnail} alt= "employee"/></td>
            <td>{employee.location.country}</td>
            <td></td>
          </tr>
        )
      }):
      <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    }
      </tbody>
      </table>
    </div>
  );
};
export default Table