// 問題
// 找出斐波那契數列第 n 項的值

// 我的解答
// 解法 1 複雜度 O(2^n)
function aa(n) {
    if (n === 0 || n === 1) {
        return n
    }
    return aa(n - 1) + aa(n - 2)
}
// 解法 2 複雜度 O(n)
function bb(n) {
    if (n === 0 || n === 1) {
        return n
    }
    let a = 0
    let b = 1
    let total = 0
    for (let i = 2; i <= n; i++) {
        total = a + b
        a = b
        b = total
    }
    return total
}

for (let i = 0; i < 10; i++) {
    console.log(aa(i))
    console.log(bb(i))
}
