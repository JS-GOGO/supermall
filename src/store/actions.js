import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'
import { resolve } from 'path'

export default {
    addCart(context, payload) {
        // 使用promise包裹，（加入购物车成功后可以调用resolve）
        return new Promise((resolve, reject) => {
            // 查找数组中是否有重复项
            // find方法 查找数组有重复项，返回重复项
            const oldInfo = context.state.cartList.find(item => item.iid == payload.iid)
            if (oldInfo) {
                //如果数组存在点击的购物车对象
                context.commit(ADD_COUNTER, oldInfo)
                resolve('商品数量加1')
            } else {
                //如果不存在
                payload.counter = 1;
                context.commit(ADD_TO_CART, payload)
                resolve('商品添加到购物车')
            }
        })
    }



    //基本的循环方法：
    // let oldInfo = null
    // for (let i of state.cartList) {
    //     //遍历元素的iid已经存在
    //     if (i.iid === payload.iid) {
    //         // 让oldInfo指向已存在的i元素，
    //         oldInfo = i
    //     }
    // }
    // if (oldInfo) {
    //     // oldInfo发生改变时，i也改变
    //     //i 是对象，原本i的地址是00x11，那么old Info的地址也是00x11，所有oldInfo发生改变，对应重复的i也发生改变

    //     oldInfo.counter += 1;
    // } else {
    //     //不相等说明第一次进来，添加一个counter属性,并push到数组
    //     payload.counter = 1;
    //     state.cartList.push(payload)

    // }

    // indexOf方法：
    // const index = state.cartList.indexOf(payload)
    //     // -1表示未找到该商品，为什么这里一直是-1？？
    // console.log(index);
    // if (index === -1) {
    //     payload.counter = 1;
    //     state.cartList.push(payload)
    // } else {
    //     state.cartList[index].counter += 1
    // }
}