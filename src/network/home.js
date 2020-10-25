//Home页面请求的所以网络数据,每一段数据对应一个导出的函数
import { request } from './request.js';


export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}