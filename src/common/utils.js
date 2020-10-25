//防抖封装（使用了闭包）
// func是需要防抖的函数，delay是防抖间隔的时间
export function debounce(func, delay) {
    let timer = null;
    // ...arg是拆分传入的参数
    return function(...arg) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arg)
                // console.log(this);
                // console.log('---');
        }, delay)
    }

}

//时间戳格式化
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};