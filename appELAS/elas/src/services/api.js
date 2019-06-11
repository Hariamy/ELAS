import axios from 'axios';

const api = axios.create({
    // Usar o ip do local da api
    baseURL: 'http://192.168.0.105:3001/api'
})

export default api;