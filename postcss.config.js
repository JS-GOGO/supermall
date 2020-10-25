module.exports = {
    plugins: {
        autoprefixer: {},
        //将文件内的px单位转化为vw单位
        "postcss-px-to-viewport": {
            viewporWidth: 375, //视宽的高度，对应我们设计稿的宽度，750是苹果6的高像素
            viewporHeight: 667, //视窗高度
            uniPrecision: 5, //指定px转化为vw视窗单位后的小数位
            viewporUnit: 'vm', //指定转化单位，建议为vm
            selectorBlackList: ['ignore', 'tab-bar'], //指定不需要转化的类名，以这些类名开头匹配，类似于正则表达式的 /^ignore/
            minPixelValue: 1, //允许小于，或者等于‘1px’ 不转化为vm视窗单位
            mediaQuery: false, //允许媒体查询中转化px
            exclude: [/^TanBar/], //正则表达式匹配的文件不用转化为视窗单位

        }
    }
}