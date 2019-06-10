import Mock, {Random} from 'mockjs'

import tableindex from "./model/tableindex";

Mock.setup({
    timeout: '100-200'
})
//login
//获取验证码
Mock.mock(/\/table\/index/, 'post', tableindex.list)

Mock.mock(/\/table\/demo/, 'post', {
    "total": 50,
    "per_page": 15,
    "current_page": 1,
    "last_page": 4,
    "first_page_url": "http://laravel.app?page=1",
    "last_page_url": "http://laravel.app?page=4",
    "next_page_url": "http://laravel.app?page=2",
    "prev_page_url": null,
    "path": "http://laravel.app",
    "from": 1,
    "to": 15,
    "data|10": [{
        'key|+1': 1,
        'date': Random.date('yyyy-MM-dd'),
        'amount': Random.integer(60, 100),
        'type': 1,
        'note': 'transfer',
        'typenewnew':444
    }]
})


Mock.mock(/\/table\/demo/, 'delete', tableindex.list)

export default Mock