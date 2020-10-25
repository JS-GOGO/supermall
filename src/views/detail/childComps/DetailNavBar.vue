<template>
<div id="defail-nav-bar">
    <nav-bar>
        <div slot="left" class="left" @click="leftClick">
            <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center" class="center">
            <div id="center-item" 
            :class="{active:index === currentIndex}" 
            :key="index" 
            v-for="(item,index) in title"
            @click="itemClick(index)">{{item}}</div>
        </div>
        <div slot="right" class="right"></div>

    </nav-bar>
</div>
</template>

<script>
    import NavBar from 'components/contnent/navBar/NavBar'

    export default {
        name: "DetailNavBar",
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0,
            }
        },
        components: {
            NavBar,
        },

        methods: {
            leftClick() {
                this.$router.back()
            },
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('navClick', index)
            },

        }
    }
</script>

<style scoped>
    .center {
        display: flex;
        z-index: 2;
    }
    
    #center-item {
        flex: 1;
    }
    
    .left {
        width: 60px;
    }
    
    .left img {
        margin-top: 10px;
    }
    
    .right {
        width: 60px;
    }
    
    .active {
        color: var(--color-high-text);
    }
</style>