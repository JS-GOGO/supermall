//防抖封装
// func是需要防抖的函数，delay是倒计时时间
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