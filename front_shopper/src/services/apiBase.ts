import axios from 'axios'

export const apiBase = axios.create({
  baseURL: 'https://shopperrickhard.herokuapp.com'
  // baseURL: 'http://localhost:3333'
})