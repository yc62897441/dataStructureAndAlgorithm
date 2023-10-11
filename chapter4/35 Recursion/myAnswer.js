// 問題
// 給定一個 n(正整數)，寫出一個 function 可以回傳數列 T 第 n 項的值，如果 T(1) = 10; T(2) = T(1) + 15; T(n) = T(n - 1) + 15

// 我的解答
function findSequence(n) {
    if (n === 1) {
        return 10
    }
    return findSequence(n - 1) + 15
}

console.log(findSequence(1))
console.log(findSequence(2))
console.log(findSequence(3))
