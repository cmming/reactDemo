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
        //{ indices: false } 用来处理传递数组时候的问题
        config.data = qs.stringify(config.data,{ indices: false });
    }
    return config
}, error => {
    store.dispatch({ type: 'HIDE_LOADING' })
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    console.log(process.env)
    store.dispatch({ type: 'HIDE_LOADING' })
    responseMsgInterceptorHandle.msg(response)
    // console.log(new responseMsgInterceptorHandle())
    return response;
}, error => {
    store.dispatch({ type: 'HIDE_LOADING' })
    // var msgStr = JSON.parse(error.message);
    responseMsgInterceptorHandle.msg(error.response)
    console.log(error,error.response)
    return Promise.reject(error);
})

export default service