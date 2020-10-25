<template>
    <div class="wrapper"
         ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            //根据父组件判断需不需要监听滚动位置
            probeType: {
                type: Number,
                default () {
                    return 0
                }
            },
            pullUpLoad: {
                type: Boolean,
                default () {
                    return true
                }
            }
        },
        data() {
            return {
                scroll: null,
            }
        },
        //在mounted时，页面已经初始化完毕，可以使用$refs
        mounted() {
            // 1.创建滚动事件
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                //获取滚动坐标值 0，1，2，3
                probeType: this.probeType,
                //拉取加载更多
                pullUpLoad: this.pullUpLoad
            });
            //监听滚动
            this.scroll && this.scroll.on('scroll', (position) => {
                // console.log(position);
                // 发射滚动事件出去(值是滚动位置)，谁想用谁监听
                this.$emit('scroll', position)
            });
            //上拉加载
            this.scroll && this.scroll.on('pullingUp', () => {
                // console.log('上拉加载了');
                this.$emit('pullingUp')
            });


        },
        methods: {
            //h回到顶部  es6语法，参数默认值
            scrollTo(x, y, time = 300) {
                this.scroll && this.scroll.scrollTo(x, y, 300)
            },
            //刷新可滚动高度
            refresh() {
                this.scroll && this.scroll.refresh()
                    // console.log('---');
            },
            //多次加载数据
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            //当前滚动的高度
            getScrollY() {
                return this.scroll ? this.scroll.y : 0
            }
        }

    }
</script>

<style scoped>

</style>