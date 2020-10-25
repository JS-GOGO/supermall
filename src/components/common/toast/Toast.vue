<template>
    <div v-show="isShow" class="toast">
        <div>{{message}}</div>
    </div>
</template>

<script>
    import {
        debounce
    } from 'common/utils'
    export default {
        name: "Toast",
        data() {
            return {
                isShow: false,
                message: 'hhhhh',
                duration: 0,
            }
        },
        methods: {
            show(message, duration = 1500) {
                this.isShow = true;
                this.message = message;

                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                }, duration)

            }


        }
    }
</script>
<style scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        background-color: rgba(0, 0, 0, .7);
        color: #fff;
        z-index: 9999;
    }
</style>