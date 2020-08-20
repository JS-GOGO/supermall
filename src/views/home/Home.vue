<template>
    <div id="home">
        <header>购物街</header>
        <tab-control-view :controls="controls"
                          @tabClick="tabClick($event)"
                          class="tab-control"
                          v-show="isTabControlFixed"
                          ref="tabControl2"></tab-control-view>
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @scroll="contentScroll($event)"
                @pullingUp="loadMore">
            <home-swiper :banners="banners"
                         @swiperImagLoad='swiperImagLoad'></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <home-feature-view></home-feature-view>
            <tab-control-view :controls="controls"
                              @tabClick="tabClick($event)"
                              ref="tabControl1"></tab-control-view>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="topClick"
                  v-show="isShowScrollTop"></back-top>
    </div>
</template>

<script>
    import HomeSwiper from './childCops/HomeSwiper'
    import HomeRecommendView from './childCops/HomeRecommendView'
    import HomeFeatureView from './childCops/HomeFeatureView'

    import TabControlView from 'components/contnent/TabControlView/TabControlView'
    import GoodsList from 'components/contnent/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/contnent/backTop/BackTop'
    import {
        debounce
    } from 'common/utils'


    import {
        getHomeMultidata,
        getHomeGoods
    } from 'network/home'

    export default {
        name: "Home",
        components: {
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,

            TabControlView,
            GoodsList,
            Scroll,
            BackTop,

        },
        data() {
            return {
                banners: [],
                recommends: [],
                controls: ['流行', '新品', '精选'],
                goods: {
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    },
                },
                currentIndex: 'pop',
                isShowScrollTop: false,
                tabControlTop: 0,
                isTabControlFixed: false,
                saveY: 0,
            }
        },

        //获取网页数据
        created() {
            //请求home多个数据
            this.getHomeMultidata();
            //请求商品数据
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        mounted() {
            //对重新加载可滚动高度进行防抖
            const refresh = debounce(this.$refs.scroll.refresh, 20)
                // 图片加载完,刷新可滚动高度
            this.$bus.$on('itemImageLoad', () => {
                refresh()
            });

        },
        computed: {
            showGoods() {
                return this.goods[this.currentIndex].list
            },
            activated() {
                //跳转到vue活跃时的滚动的高度
                this.$refs.scroll.scrollTo(0, this.saveY, 0)
                this.$refs.scroll.refresh()
            },
            deactivated() {
                this.saveY = this.$refs.scroll.getScrollY()
            }
        },
        methods: {
            //tabControl获得点击的index,传递给Home,改变tabControl需要获取的内容
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentIndex = 'pop'
                        break;
                    case 1:
                        this.currentIndex = 'new'
                        break;
                    case 2:
                        this.currentIndex = 'sell'
                        break
                };
                //同步两个组件
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            //回到顶部
            topClick() {
                //获取scroll组件的方法
                this.$refs.scroll.scrollTo(0, 0)
            },
            //超过固定高度显示回到顶部按钮
            contentScroll(position) {
                this.isShowScrollTop = (-position.y) > -1000;
                this.isTabControlFixed = (-position.y) > this.tabControlTop
            },
            //上拉加载更多商品数据,需要监听每一个加载的img加载完成
            loadMore() {
                this.getHomeGoods(this.currentIndex);

            },
            //监听轮播图加载完图片后,获取tabContorl的高度
            swiperImagLoad() {
                // console.log(this.contentScroll());
                this.tabControlTop = this.$refs.tabControl1.$el.offsetTop;
            },
            /*
                网络请求数据
            */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    // console.log(res);
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },
            getHomeGoods(type) {
                //每次调用，本类型页数加1 为什么有时获取对象内的属性需要添加中括号
                const page = this.goods[type].page + 1;
                getHomeGoods(type, page).then(res => {
                    // console.log(res);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                    //控制子组件可以多次加载数据
                    this.$refs.scroll.finishPullUp()
                })
            },


        },
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 44px;
        line-height: 44px;
        background-color: var(--color-tint);
        color: aliceblue;
        font-size: 24px;
        z-index: 2;
        text-align: center;
        position: fixed;
        top: 0;
    }
    
    #home {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }
    
    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    
    .tab-control {
        position: relative;
        z-index: 10;
    }
</style>