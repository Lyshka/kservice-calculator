import axios from "axios";

export const newAxios = axios.create({
  baseURL: "http://kservice.local/wp-json/wp/v2",
});
