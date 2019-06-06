import Mock from 'mockjs'

import tableindex from "./model/tableindex";

//login
//获取验证码
Mock.mock(/\/table\/index/, 'post', tableindex.list)

export default Mock