let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
let Random =Mock.Random;

let table = require('./model/table')

console.log(table)

let app = express(); //实例化express


//基础table的数据模拟
//分页数据
app.get('/table/demo', table.list);
//删除数据
app.delete('/table/demo/[0-9]',  table.list);
//更新数据
app.put('/table/demo/[0-9]',  table.update);
//保存数据
app.post('/table/demo', table.index);





/**
 * 监听8090端口
 */
app.listen('8090', () => {
    console.log('mock server start on http://localhost:8090')
})