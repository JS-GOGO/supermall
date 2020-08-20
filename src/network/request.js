//这里封装axios 最主要的作用是可以配置多个默认信息，不受其它默认信息影响

import axios from 'axios';
// config 是传入的地址，成功、失败需返回的信息封装的对象

export function request(config) {
    // 1.创建axios实例  
    const instance = axios.create({
        //配置默认地址
        baseURL: 'http://152.136.185.210:8000/api/z8',
        //默认超时报错
        timeout: 5000,
    });

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    //4.返回调用的实例（axios是一个promise对象，外部.then调用）
    return instance(config);
}