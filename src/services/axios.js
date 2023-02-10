import axios from "axios";

function getAPI(ip="") {

   return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QVEXgfIRf0d7jjExUVOfcYd8uq6hQ&ipAddress=${ip}`)
      .then(function (response) {

         return response;
      });
}

export default getAPI;