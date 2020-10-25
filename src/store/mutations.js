import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'
export default {
    [ADD_COUNTER](state, payload) {
        payload.counter += 1
    },
    [ADD_TO_CART](state, payload) {
        //给payload添加一个checked属性方便判断按钮是否选中
        payload.checked = true;
        state.cartList.push(payload)
    }









}