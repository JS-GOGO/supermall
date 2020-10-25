<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .back-top {
        position: absolute;
        right: 8px;
        bottom: 55px;
        z-index: 9;
    }
    
    .back-top img {
        width: 43px;
        height: 43px;
    }
</style>