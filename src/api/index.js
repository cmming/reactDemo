import axios from 'axios'

import qs from 'qs'

import store from '../store/index'

// import {responseMsgInterceptors} from './interceptors'

import responseMsgInterceptorHandle from './interceptors/responseMsgInterceptor'


const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    // baseURL: '/api', // api的base_url
    timeout: 15000, // request timeout
    withCredentials: true // 选项表明了是否是跨域请求
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
    responseMsgInterceptorHandle.msg(response)
    return response;
}, error => {
    store.dispatch({ type: 'HIDE_LOADING' })
    return Promise.reject(error);
})

export default service