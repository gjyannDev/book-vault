import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
