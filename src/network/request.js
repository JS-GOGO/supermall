//这里封装axios 最主要的作用是可以配置多个默认信息，不受其它默认信息影响

import axios from 'axios';
// config 是传入的地址，成功、失败需返回的信息封装的对象
export function request(config) {
    // 1.创建axios实例  
    const instance = new axios.create({
        //配置默认地址
        baseURL: 'http://123.207.32.32:8000',
        //默认超时报错
        timeout: 5000,
    });
    //2.直接返回调用的实例（axios是一个promise对象，外部.then调用）
    return instance(config);
    //即使以后axios不能用了，也可以直接在这里返回一个promise对象，外部不受影响
    // return new Promise(新的网络请求框架)
}



// 回调函数的方式封装：

// //config 是传入的地址baseConfig，成功（函数）、失败（函数）需返回的信息封装的对象
// export function request(config) {
//     // 1.创建axios实例  
//     const instance = new axios.create({
//         //配置默认地址
//         baseURL: '',
//         //默认超时报错
//         timeout: 5000,
//     });
//     //2.调用实例,发生网络请求
//     instance(config.baseConfig)
//         .then(res => {
//             //执行成功后调用config内成功函数，参数是成功响应结果
//             config.success(res)
//         })
//         .catch(err => {
//             //执行失败后调用config内失败函数，参数是失败响应结果
//             config.failure(err)
//         })
// }