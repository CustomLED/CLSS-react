import axios from 'axios';

const postAPI = axios.create({
    baseURL: '//clss-api.herokuapp.com/'
});

postAPI.interceptors.request.use((req) => {
    const token =sessionStorage.getItem('token');
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default postAPI;
