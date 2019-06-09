import { param2Obj } from '../../utils'
import { Random } from 'mockjs'


export default {
    //获取列表
    list: config => {
        // const { username } = JSON.parse(config.body)
        // console.log(username)
        console.log(config,param2Obj(config.body))
        const { id } = param2Obj(config.url)
        console.log(id)
        var result = {
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
            "data": []
        }
        for (let i = 0; i < 10; i++) {
            const tmp = {
                key: i,
                date: Random.date('yyyy-MM-dd'),
                amount: Random.integer(60, 100),
                type: 'income',
                note: 'transfer',
            };
            result.data.push(tmp)

        }
        return result
    }
}