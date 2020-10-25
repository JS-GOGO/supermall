//混入：提取组件内公共代码

import { debounce } from './utils'
import BackTop from 'components/contnent/backTop/BackTop'

export const itemImgListenerMixin = {
    data() {
        return {
            itemImgListend: null,
            newRefresh: null,
        }
    },
    mounted() {
        //这里只是img标签加载，图片却未加载，页面高度被停留在img标签，页面需要重新加载高度
        //对重新加载可滚动高度进行防抖
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
        // scroll组件图片加载完,接收到发射信息，开始调用函数--重新加载可滚动的高度
        this.itemImgListend = () => {
            this.newRefresh()
        };
        this.$bus.$on('itemImageLoad', this.itemImgListend);
        // console.log('我是混入内容');
    },
}

//回到顶部按钮
export const backTopMixin = {
    data() {
        return {
            isShowScrollTop: false,
            ListenerBackTop: null
        }
    },
    components: { BackTop },
    methods: {
        //回到顶部
        topClick() {
            //获取scroll组件的方法
            this.$refs.scroll.scrollTo(0, 0)
        },
        ListenerShowBackTop(position) {
            this.isShowScrollTop = (-position.y) > 1000;
        }

    }
}