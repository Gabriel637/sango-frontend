import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sango-api.herokuapp.com/'
})

export default api
