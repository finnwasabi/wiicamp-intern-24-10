import axios from "axios";

const request = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default request;
