import { request } from './request';



export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: { iid }
    })
}

//创建一个类，让页面面对这个类获取数据
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
    }
}

// export class ItemParam {
//     constructor(item, rule) {
//         this.item = item;
//         this.rule = rule;
//     }
// }

//请求详情页推荐数据
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}