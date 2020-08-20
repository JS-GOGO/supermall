<template>
    <div id="recommend">
        <div :key="index"
             v-for="(item,index) in recommends"
             id="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: "HomeRecommendView",
    data() {
        return {
        }
    },
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style  scoped>
#recommend {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
#recommend-item {
    flex: 1;
    font-size: 16px;
}
#recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
}
</style>
