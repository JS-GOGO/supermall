<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <main-tabbar></main-tabbar>
    </div>
</template>

<script>
    import MainTabbar from 'components/contnent/mainTabbar/MainTabbar'

    export default {
        name: 'App',
        components: {
            MainTabbar,
        }
    }
</script>

<style>

</style>