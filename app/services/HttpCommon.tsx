import axios from "axios";

const API_URL = "https://657bf169394ca9e4af150a6c.mockapi.io/api/v1/"

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})