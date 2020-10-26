import axios from "axios";

let Axios = axios.create({
  baseURL: "https://immense-dusk-78248.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
  },
  responseType: "json",
  contentType: "json",
});