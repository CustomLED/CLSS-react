import axios from 'axios';

const postAPI = axios.create({
    baseURL: 'http://clss-api.herokuapp.com',
});

postAPI.interceptors.request.use((req) => {
    const token =sessionStorage.getItem('token');
    console.log("set token header:", token);
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default postAPI;