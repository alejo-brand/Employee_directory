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
    search:""
  }
  componentDidMount() {
    api.getRandomUser()
      .then(response =>this.setState({employees:response.data.results}))
      .catch(err => console.log(err));
  }
  render(){

    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Search />
        </div>  
        <div>
          <Table employees = {this.state.employees}/>
        </div>  
      </>
    );
  }
}

export default App;
