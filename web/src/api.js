import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3002/`
   // https://api-opclient-back.herokuapp.com
//    http://127.0.0.1:3001
})

export default api;