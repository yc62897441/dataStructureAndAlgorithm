// 問題
// 找出斐波那契數列第 n 項的值

// 我的解答
// 解法 1 複雜度 O(2^n)
function fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
}
// 解法 2 複雜度 O(n)
function fibonacci_2(n) {
    if (n === 0) return 0
    if (n === 1) return 1

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
    console.log(fibonacci(i))
    console.log(fibonacci_2(i))
}

// 教案解答
function fs(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fs(n - 1) + fs(n - 2)
    }
}

for (let i = 0; i < 15; i++) {
    console.log(fs(i))
}
