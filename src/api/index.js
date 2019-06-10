import axios from 'axios'

import qs from 'qs'

import store from '../store/index'


const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000, // request timeout
})



service.interceptors.request.use(config => {
    store.dispatch({ type: 'SHOW_LOADING' })
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        config.data = qs.stringify(config.data);
    }
    return config
}, error => {
    store.dispatch({ type: 'HIDE_LOADING' })
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    store.dispatch({ type: 'HIDE_LOADING' })

    return response;
}, error => {
    store.dispatch({ type: 'HIDE_LOADING' })
    return Promise.reject(error);
})

export default service