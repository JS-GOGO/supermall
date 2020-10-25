<template>
    <nav-bar>
        <div class="center" slot="center">购物车({{cartCounter}})</div>
    </nav-bar>
</template>

<script>
    import NavBar from 'components/contnent/navBar/NavBar'


    export default {
        name: "CartNavBar",
        data() {
            return {}
        },
        props: ['cartCounter'],

        components: {
            NavBar,
        },


    }
</script>

<style scoped>
    .center {
        font-size: 24px;
        color: #fff;
        background-color: var(--color-tint);
    }
</style>