import axios from "axios";

export const jsonplaceholderAxiosInstanse = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
