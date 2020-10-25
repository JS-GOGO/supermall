const getters = {
    cartList(state) {
        return state.cartList
    },
    cartCounter(state, getters) {
        return getters.cartList.length
    }
}
export default getters