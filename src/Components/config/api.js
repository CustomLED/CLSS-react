import axios from 'axios';

const postAPI = axios.create({
    baseURL: 'http://localhost:3001'
})

export default postAPI;