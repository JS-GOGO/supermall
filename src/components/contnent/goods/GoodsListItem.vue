<template>
    <div class="goods-item" @click="itemCilck()">
            <img v-lazy="showImg"
                 @load="refresh">
            <div class="goods-info">
                <p>{{goodsItem.title}}</p>
                <span class="price">{{goodsItem.price}}</span>
                <span class="collect">{{goodsItem.cfav}}</span>
            </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        computed: {
            showImg() {
                return this.goodsItem.image || this.goodsItem.show.img
            }
        },
        methods: {
            //加载图片后触发发射
            refresh() {
                //详情页和首页都用到这个组件，所以要对发射事件进行优化，使得进入详情页时Home不刷新
                this.$bus.$emit('itemImageLoad')
            },
            //跳转详情页
            itemCilck() {
                // console.log(this.goodsItem);
                //使用query传递iid
                this.$router.push({
                    path: '/detail',
                    query: {
                        iid: this.goodsItem.iid
                    }
                })
            }

        }
    }
</script>

<style scoped>
    .goods-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    
    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }
    
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    
    .goods-info .collect {
        position: relative;
    }
    
    .goods-info .collect::before {
        content: "";
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>