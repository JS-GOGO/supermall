<template>
        <div>
            <cart-nav-bar :cart-counter="cartCounter"/>

            <cart-list :cart-list="cartList">
            </cart-list>

            <cart-bottom :cart-list="cartList" ></cart-bottom>
        </div>
</template>

<script>
    import CartNavBar from './childComps/CartNavBar.vue'
    import CartList from './childComps/CartList.vue'
    import CartBottom from './childComps/CartBottom.vue'
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: "Shopcart",
        components: {
            CartNavBar,
            CartList,
            CartBottom
        },
        computed: {
            //对vuex内的getters解构
            ...mapGetters(['cartCounter', 'cartList'])
            // ...mapGetters({
            //     length: cartCounter
            // })
        },
    }
</script>

<style scoped>

</style>