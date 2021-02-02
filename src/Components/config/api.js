import axios from 'axios';

const postAPI = axios.create({
    baseURL: 'http://clss-api.herokuapp.com'
})

export default postAPI;