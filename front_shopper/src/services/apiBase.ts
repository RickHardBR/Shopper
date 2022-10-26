import axios from "axios";

export const apiBase = axios.create({
  baseURL: 'https://shopperrickhard.herokuapp.com'
})