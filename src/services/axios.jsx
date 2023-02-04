import axios from "axios";

export default function getData(ip = "") {
    return axios.get(`http://ip-api.com/json/${ip}`)
        .then(function (response) {
            return response
        });
}