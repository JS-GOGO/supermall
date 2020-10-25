<template>
    <swiper class="detail-swiper">
        <swiper-item :key="index" v-for="(item,index) in swiperImage">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'


    export default {
        name: "DetailSwiper",
        data() {
            return {}
        },
        props: {
            swiperImage: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem,
        }
    }
</script>

<style scoped>
    .detail-swiper {
        height: 300px;
    }
</style>