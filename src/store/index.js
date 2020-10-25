import Vue from 'vue';
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
    //存放加入购物车的所有商品
    cartList: [],
    // oldInfo: null,
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})
export default store