<template>
    <div class="tab-control">
        <div class="tab-control-item"
             :key="index"
             v-for="(item,index) in controls"
             :class="{active:index == currentIndex}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControlView",
        data() {
            return {
                currentIndex: 0
            }
        },
        props: {
            controls: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        methods: {
            //控制显示那一个tabControl小item
            itemClick(index) {
                //点击时改变currentIndex值为当前点击的index值，index的值来自循环
                this.currentIndex = index
                this.$emit('tabClick', index)
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    
    .tab-control-item {
        flex: 1;
    }
    
    .tab-control-item span {
        padding: 5px;
    }
    
    .active {
        color: var(--color-high-text);
    }
    
    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
</style>