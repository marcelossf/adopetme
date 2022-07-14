import axios from 'axios'

const api = axios.create({
    baseURL: 'https://json-server-adopetme.herokuapp.com/'
})

export default api;