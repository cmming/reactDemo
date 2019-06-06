import request from './index'
import API_TYPE from './api'

export default function requestMap(apiKey, data) {

    // console.log(data)
    let res, tmpData = data;
    //如果是表单 formdata
    if (API_TYPE[apiKey]['hasData'] && (API_TYPE[apiKey]['method'] === 'post' || API_TYPE[apiKey]['method'] === 'put' || API_TYPE[apiKey]['method'] === 'delete')) {
        res = {
            url: API_TYPE[apiKey]['url'],
            method: API_TYPE[apiKey]['method'],
            data: tmpData,
        };
    } else if (API_TYPE[apiKey]['hasData'] && API_TYPE[apiKey]['method'] === 'get') {
        res = {
            url: API_TYPE[apiKey]['url'],
            method: API_TYPE[apiKey]['method'],
            params: tmpData,
        };
    }

    return request(res)
}