import axios from 'axios'

import qs from 'qs'

const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000, // request timeout
})


service.interceptors.request.use(config => {
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        config.data = qs.stringify(config.data);
    }
    return config
}, error => {
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
})

export default service