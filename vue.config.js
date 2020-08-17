module.exports = {
    //给文件起别名

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}