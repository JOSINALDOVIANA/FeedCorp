import axios from 'axios';

const api = axios.create({
    baseURL: `http://54.152.239.102:3001/`
   // https://api-opclient-back.herokuapp.com
//    http://127.0.0.1:3001
})

export default api;