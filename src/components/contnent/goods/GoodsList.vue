<template>
    <div class="goods">
        <goods-list-item :key="index"
                         v-for="(item,index) in goods"
                         :goodsItem="item">
        </goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from 'components/contnent/goods/GoodsListItem'

export default {
    name: "GoodsList",
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem,
    },
}
</script>

<style  scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
}
</style>
