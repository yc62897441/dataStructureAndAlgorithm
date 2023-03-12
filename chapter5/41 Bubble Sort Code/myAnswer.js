// 問題
// 寫出 bubble sort

// 我的答案
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                const temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
        }
    }
    return array
}

const arr = [5, 1, 8, 7, 4, 2]
console.log(bubbleSort(arr))

// 教案解法
function bubbleSort(arr) {
    let step = 0
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                // swap arr[j] and arr[j - 1]
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                step++
            }
        }
    }
    console.log('It takes ' + step + ' steps to complete.')
    console.log(arr)
}

let test = []

for (let i = 0; i < 100; i++) {
    test.push(Math.floor(Math.random() * 100))
}

bubbleSort(test)
