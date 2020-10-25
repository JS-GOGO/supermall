<template>
    <div class="recommend-info">
        <div class="info-header">热门推荐</div>
        <grid-view>
          <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
        </grid-view>
      </div>
</template>

<script>
    export default {
        name: "DetailRecommendList",
        props: {
            recommendList: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>