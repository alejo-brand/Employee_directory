/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table"
import React, {Component} from "react";
import api from "./utils/api"


class App extends Component {
  state = {
    employees:[],
    search:"",
    originalEmployees:[]
  }
  componentDidMount() {
    api.getRandomUser()
      .then(response =>this.setState({employees:response.data.results, originalEmployees:response.data.results}))
      .catch(err => console.log(err));
  }
  
  handleInputChange = (event) =>{
    const {name,value} = event.target;
    this.setState({[name]:value})
    console.log(value)
    const newEmoployee = this.state.originalEmployees.filter(employee =>employee.name.first.toLowerCase().includes(value.toLowerCase())||employee.name.last.toLowerCase().includes(value.toLowerCase()))
    this.setState({employees:newEmoployee})
  }
handleSortChange = () =>{
  const newEmployees = this.state.employees.sort((a,b)=> a.name.first.localeCompare(b.name.first))
  this.setState({employees:newEmployees})
}
  render(){

    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Search search = {this.state.search} handleInputChange = {this.handleInputChange} />
        </div>  
        <div>
          <Table employees = {this.state.employees} handleSortChange = {this.handleSortChange}/>
        </div>  
      </>
    );
  }
}

export default App;
