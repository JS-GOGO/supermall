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
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'

    export default {
        name: "HomeSwiper",
        props: {
            banners: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {
                isLoad: false
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
                if (!this.isLoad) {
                    this.$emit('swiperImagLoad');
                    this.isLoad = true
                }
                // console.log(this.banners)
            },

        }
    }
</script>

<style scoped>

</style>