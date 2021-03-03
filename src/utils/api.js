 /* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  getRandomUser: function(){
    return axios.get('https://randomuser.me/api/?results=40');
  }
};
