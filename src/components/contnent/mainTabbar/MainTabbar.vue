<template>
    <tab-bar>
        <!-- 导航栏组件的插槽 -->
        <!-- 用户点击传入地址  isActiveColor可控制活跃主题颜色-->
        <tab-bar-item path='/home'>
            <!-- 导航栏内小组件插槽填的内容 -->
            <img slot="item-icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category'>
            <img slot="item-icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <div slot="item-text">菜单</div>
        </tab-bar-item>
        <tab-bar-item path='/shopcart'>
            <img slot="item-icon_active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
            <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile'>
            <img slot="item-icon_active" src="~assets/img/tabbar/profile_active.svg" alt="">
            <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
            <div slot="item-text">用户</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
    name: "MainTabbar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style  scoped>
@import "~assets/css/base.css";
</style>
