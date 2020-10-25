// 安装Toast组件为全组件

import Toast from './Toast.vue';
const obj = {};

//mian.js内使用Vue.use 时，内部会执行install函数，默认第一个参数是Vue
obj.install = function(Vue) {
        // 1.创建Vue扩展实例构造器（子组件）
        const toastConstrustor = Vue.extend(Toast);
        //2.创建扩展实例构造器实例(使用Toast组件)
        const toast = new toastConstrustor();
        //3.将组件对象手动挂载到文档下的一个div上
        toast.$mount(document.createElement('div'));
        // 4.将toast.$el 也就是Toast组件内的template添加入挂载的div内
        document.body.appendChild(toast.$el)

        //5.全局注册该组件
        Vue.prototype.$toast = toast;
    }
    //导出obj，这里obj的作用主要是可以使用install调用函数
export default obj;