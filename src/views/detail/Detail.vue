<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav" @navClick="themeTops" ref="navBar"/>
        <scroll class="content" 
        ref="scroll"
        @scroll="contentScroll($event)"
        :probe-type="3">
            <detail-swiper ref="swiper" :swiperImage="swiperImage">
            </detail-swiper>
            <detail-goods :goods="goods"></detail-goods>
            <detail-show-info :shop="shop"></detail-show-info>
            <detail-goods-info :detail-info="detailInfo" @GoodsListInfoImgLoad="imgLoad"></detail-goods-info>
            <detail-param-info ref="param"  :param-info="paramInfo"></detail-param-info>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
            <goods-list ref="recommends" :goods="recommends"></goods-list>
        </scroll>
        <back-top @click.native="topClick"
        v-show="isShowScrollTop"></back-top>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
        <toast ref="toast"></toast>
    </div>
    
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar.vue'
    import DetailSwiper from './childComps/DetailSwiper.vue'
    import DetailGoods from './childComps/DetailGoods.vue'
    import DetailShowInfo from './childComps/DetailShowInfo.vue'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
    import DetailParamInfo from './childComps/DetailParamInfo.vue'
    import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
    import DetailRecommendList from './childComps/DetailRecommendList.vue'
    import DetailBottomBar from './childComps/DetailBottomBar.vue'
    import Toast from 'components/common/toast/Toast'

    import Scroll from 'components/common/scroll/Scroll'
    import GoodsList from 'components/contnent/goods/GoodsList'

    import {
        itemImgListenerMixin,
        backTopMixin
    } from 'common/mixin'

    import {
        getDetailData,
        Goods,
        getRecommend
    } from 'network/detail'

    import {
        debounce
    } from 'common/utils'

    import {
        mapActions
    } from 'vuex';
    export default {
        name: "Detail",
        data() {
            return {
                iid: null,
                swiperImage: [],
                title: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: [],
                themeTopsY: [],
                getThemeTopsY: null,
                scrollY: 0,
                currentIndex: 0,
            }
        },
        mixins: [itemImgListenerMixin, backTopMixin],
        components: {
            DetailSwiper,
            DetailNavBar,
            DetailGoods,
            DetailShowInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailBottomBar,
            // DetailRecommendList,
            Toast,
            Scroll,
            GoodsList,
        },
        created() {
            //查值用$route,改值用$router
            this.iid = this.$route.query.iid
            getDetailData(this.iid).then(res => {
                const result = res.result;
                // console.log(result);
                //获取轮播图图片
                this.swiperImage = result.itemInfo.topImages;
                //获取商品展示数据（这里需要进行防抖）
                this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
                //商品店铺信息
                this.shop = result.shopInfo;
                //商品详情参数展示
                this.detailInfo = result.detailInfo;
                //商品推荐尺码
                this.paramInfo = result.itemParams;
                //用户评论数据
                if (result.rate.list) {
                    //这里只显示一条评论
                    this.commentInfo = result.rate.list[0]
                }
                //获取子组件的offsetTop坐标(注意这里获取$el的offsetTop是在图片加载完才能获取准确)
                this.getThemeTopsY = debounce(() => {
                    this.themeTopsY = []
                    this.themeTopsY.push(this.$refs.swiper.$el.offsetTop)
                    this.themeTopsY.push(this.$refs.param.$el.offsetTop)
                    this.themeTopsY.push(this.$refs.comment.$el.offsetTop)
                    this.themeTopsY.push(this.$refs.recommends.$el.offsetTop)
                    this.themeTopsY.push(Number.MAX_VALUE)
                        // console.log(this.themeTopsY);
                }, 100);

            });
            //推荐数据展示，使用以前封装的组件
            getRecommend().then(res => {
                // console.log(res);
                const data = res.data
                this.recommends = res.data.list
            });

        },
        methods: {
            //映射vuex的actions方法
            ...mapActions(['addCart']),

            //图片加载及图片加载的防抖
            imgLoad() {
                // const newRefresh = debounce(this.$refs.scroll.refresh, 100);
                // newRefresh()
                //不推荐上面做法：在imgLoad函数内部有单独的作用域，每次触发imgLoad函数，都会产生新的newRefresh（回想以下data函数），这样防抖都是单独产生的，就是不会顶替上一个倒计时的效果
                // 可以这样：itemImgListend来自混入，data函数有自己的作用域，imgLoad每次调用时产生的多个newRefresh都会存入data中，当是这里的itemImgListend会有顶替的效果
                // 总结，防抖函数必须在同一个作用域
                // const newRefresh = debounce(this.$refs.scroll.refresh, 100);
                // this.itemImgListend = () => {
                //     newRefresh()
                // };
                //简单点，利用混入
                this.newRefresh();

                //图片加载完成再获取offsetTop坐标后，执行防抖函数，（这个时候的$el及可滚动动高度才被确认）
                this.getThemeTopsY();


            },

            //点击跳转到指定的坐标
            themeTops(index) {
                this.$refs.scroll.scrollTo(0, -this.themeTopsY[index], 100)
            },

            //滚动触发事件
            contentScroll(position) {
                this.scrollY = -this.$refs.scroll.getScrollY();
                // //第一种监听高度改变index
                // 这里的取值采用的是判断页面高度大于数组内前一项，小于数组后一项，判断到数组最后一项时，需要对页面高度大于最后一项做其它判断（因为没有比他更大的了）
                // const themeTopsYLeng = this.themeTopsY.length
                // for (let i = 0; i < themeTopsYLeng; i++) {
                //     if (this.currentIndex !== i && ((i < themeTopsYLeng - 1 && this.scrollY >= this.themeTopsY[i] && this.scrollY < this.themeTopsY[i + 1]) || (i == themeTopsYLeng - 1 && this.scrollY >= this.themeTopsY[i]))) {
                //         this.currentIndex = i
                //         this.$refs.navBar.currentIndex = this.currentIndex
                //     }
                // }
                //第二种hack方法 给数组最后一项添加一个最大值，这样就不用考虑页面高度大于原本最后一项需要做的判断（）
                const themeTopsYLeng = this.themeTopsY.length
                for (let i = 0; i < themeTopsYLeng - 1; i++) {
                    if (this.currentIndex !== i && ((i < themeTopsYLeng - 1) && (this.scrollY >= this.themeTopsY[i] && this.scrollY < this.themeTopsY[i + 1]))) {
                        this.currentIndex = i
                        this.$refs.navBar.currentIndex = this.currentIndex

                    }
                }
                //超过固定高度显示回到顶部按钮,mixin执行
                this.ListenerShowBackTop(position)
            },

            //添加商品到购物车
            addToCart() {
                //创建一个空对象，存放传递给购物车的数据
                const product = {};
                // console.log(this.goods);
                product.iid = this.iid;
                product.newPrice = this.goods.oldPrice;
                product.title = this.goods.title;
                product.imgURL = this.swiperImage[0];
                // console.log(product);


                //将数据存放到vuex(actions提交)
                // this.$store.dispatch('addCart', product).then(res => console.log(res))
                //使用映射添加数据 将数据存放到vuex(actions提交)
                this.addCart(product).then(res => {
                    // console.log(res);
                    // console.log(this.$toast);
                    this.$toast.show(res, 1000)
                })

            }
        },


    }
</script>

<style scoped>
    .content {
        background-color: #fff;
        height: calc(100vh - 44px - 49px);
        position: relative;
        top: 0;
        overflow: hidden;
        z-index: 2;
    }
</style>