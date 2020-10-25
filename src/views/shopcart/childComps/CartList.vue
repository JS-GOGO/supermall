<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <cart-list-item 
            v-for="(item,index) in cartList"
            :key="index"
            :item-info="item"/>
        </scroll>
    </div>
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll'
    import CartListItem from './CartListItem.vue'
    export default {
        name: "CartList",
        data() {
            return {}
        },
        props: {
            cartList: {
                type: Array,
                default () {
                    return []
                }
            },
        },
        components: {
            Scroll,
            CartListItem,
        },
        //刷新可滚动高度（加入商品到购物车时，可滚动高度是固定的）
        activated() {
            this.$refs.scroll.refresh()

        }
    }
</script>

<style scoped>
    .cart-list {
        height: calc(100vh - 44px - 49px);
    }
    
    .content {
        height: 100%;
        overflow: hidden;
    }
</style>