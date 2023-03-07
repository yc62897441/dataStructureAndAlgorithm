// 問題
// 給定一個 n(正整數)，寫出一個 function 可以回傳數列 T 第 n 項的值，如果 T(1) = 10; T(2) = T(1) + 15; T(n) = T(n - 1) + 15

// 我的解答
function aa(n) {
    if (n === 1) {
        return 10
    }
    return aa(n - 1) + 15 
}

console.log(aa(1))
console.log(aa(2))
console.log(aa(3))

