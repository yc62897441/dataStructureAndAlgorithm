const arr = ['A', 'B', 'C']

let counter1 = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            counter1++
            console.log(arr[i] + arr[j] + arr[k])
        }
    }
}
console.log('counter1', counter1) // 27 次

let counter2 = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === j) continue
        for (let k = 0; k < arr.length; k++) {
            counter2++
            if (i === k || j === k) continue
            console.log(arr[i] + arr[j] + arr[k])
        }
    }
}
console.log('counter2', counter2) // 18 次
