function func1(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

function func2(n) {
    return ((1 + n) * n) / 2
}

const time1 = window.performance.now()
console.log(func1(100000000))
const time2 = window.performance.now()
const timeFunc1 = (time2 - time1) / 1000
console.log(`It takes ${timeFunc1} seconds to run func1.`)

const time3 = window.performance.now()
console.log(func2(100000000))
const time4 = window.performance.now()
const timeFunc2 = (time4 - time3) / 1000
console.log(`It takes ${timeFunc2} seconds to run func2.`)
