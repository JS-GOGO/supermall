<template>
    <div class="bottom-bar">
        <div class="check-all">
            <check-button :is-checked="isCheckedAll" @click.native="changeCheckedAll" /> <span>全选</span>
        </div>

        <div class="total-sprice">
            <span>总价：{{totalSprice}}</span>
        </div>

        <div class="calculate" @click="calculateAll">
            <span>结算({{calculate}})</span>
        </div>
    </div>
</template>

<script>
    import CheckButton from 'components/contnent/checkButton/CheckButton'
    export default {
        name: "CartBottom",
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
            CheckButton,
        },
        computed: {
            totalSprice() {
                return '￥' + this.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    const price = item.newPrice.slice(1)
                    return preValue + price * item.counter
                }, 0).toFixed(2);
            },
            calculate() {
                return this.cartList.filter(item => {
                        return item.checked
                    }).length
                    // .reduce((preValue, item) => {
                    //     return preValue + item.counter
                    // }, 0)
            },
            //单选改变全选按钮
            isCheckedAll() {
                // 购物车长度为时：
                if (this.cartList.length == 0) return false

                return !this.cartList.find(item => !item.checked)
            }
        },
        methods: {
            //全选改变单选按钮
            changeCheckedAll() {
                //如果购物车为空
                if (this.cartList.length <= 0) return this.$toast.show('当前购物车为空', 1500)
                if (this.isCheckedAll) {
                    this.cartList.forEach(item => item.checked = false)
                } else {
                    this.cartList.forEach(item => item.checked = true)
                }
                //不能简写：item.checeked改变时，this.isCheckedAll也改变
                // this.cartList.forEach(item => item.checked = !this.isCheckedAll)
            },
            calculateAll() {

                if (this.cartList.length <= 0) return this.$toast.show('请添加商品再进行结算', 1500)

            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        display: flex;
        position: relative;
        height: 40px;
        line-height: 40px;
        bottom: 40px;
        background-color: #CCC;
        z-index: 10;
    }
    
    .check-all {
        display: flex;
        float: left;
        width: 60px;
        align-items: center;
        margin-left: 8px;
    }
    
    .total-sprice {
        flex: 1;
        text-align: center;
    }
    
    .calculate {
        float: right;
        width: 100px;
        text-align: center;
        background-color: var(--color-tint);
        color: #fff;
    }
</style>