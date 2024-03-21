


// 传入promise中的这个函数被称为执行函数，他是同步执行的
/*
promise三种状态
    "pending"

    "fulfilled
    "rejected"
*/
const p1 = new Promise((resolve, reject) => {
    // 真正执行的代码
    // setTimeout(() => {
    resolve(123)
    // }, 1000)

})


// // then方法传入的函数都是异步的
let p2 = p1.then(
    (res) => {
        return "YiHang";
    },
    (error) => {
        console.log("error: " + error)

    }
)


// function fangdou(fn, delay) {
//     let timer
//     return function () {
//         let _this = this
//         let _args = arguments
//         clearTimeout(timer)
//         timer = setTimeout(function () {
//             fn.apply(_this, _args)
//         }, delay)
//     }
// }
// function fang() {
//     console.log(1);
// }

// let fangdouafter = fangdou(fang, 1000)
// document.addEventListener('mousemove', () => {
//     fangdouafter()
// })





