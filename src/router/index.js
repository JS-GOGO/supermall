import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "views/home/Home"
import Category from "views/category/Category"
import Profile from "views/profile/Profile"
import Shopcart from "views/shopcart/Shopcart"

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/category',
        component: Category
    }, {
        path: '/shopcart',
        component: Shopcart
    }, {
        path: '/profile',
        component: Profile
    },

]

const router = new VueRouter({
    routes,
    mode: 'history',
    components: {
        Home,
        Category,
        Profile,
        Shopcart,
    }
})

export default router