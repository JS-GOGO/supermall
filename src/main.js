import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
//创建事件总线
Vue.prototype.$bus = new Vue();

//解决移动端点击的300ms延迟
FastClick.attach(document.body);

//安装toast插件,吐司小窗口
Vue.use(toast)

//安装vue图片懒加载
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')