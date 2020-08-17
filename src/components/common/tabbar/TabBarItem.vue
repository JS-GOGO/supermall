<template>
    <div class="tab-bar-item" @click="itemRouter">
        <!-- 插槽内的样式会内覆盖，需要在插槽外部创建div放样式-->
        <div v-if="isActive">
            <slot name="item-icon_active"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <!-- 无法根据接收的值动态改变class，只能动态改变style -->
        <div :style="isActiveStyle">
            <slot name="item-text"></slot>
        </div>
    </div>

</template>

<script>



export default {
    name: "TarBar",
    //父子通过组件传值
    props: {
        path: String,
        isActiveColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        isActive() {
            // 判断当前活跃路由的path和传入的path是否一样
            return this.$route.path.indexOf(this.path) !== -1;
        },
        isActiveStyle() {
            //根据传值的方式改变字体样式
            return this.isActive ? { color: this.isActiveColor } : {};
        }
    },
    methods: {
        itemRouter() {
            // console.log(this.path);
            this.$router.push(this.path).catch(err => { })
        }
    }

}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>