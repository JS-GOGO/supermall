<template>
    <swiper>
        <swiper-item :key="index"
                     v-for="(item,index) in banners">
            <a :href="item.link">
                <img :src="item.image"
                     @load="imagLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
    name: "HomeSwiper",
    data() {
        return {
            oneEmitImagLoad: false
        }

    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        //加载轮盘图图片后
        imagLoad() {
            //只发送一次事件(轮播图一共加载了四次)
            if (!this.oneEmitImagLoad) this.$emit('swiperImagLoad');
            this.oneEmitImagLoad = true
        }
    }
}
</script>

<style scoped>
</style>