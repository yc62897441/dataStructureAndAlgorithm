const array1 = []
const array2 = []
const array3 = []

let startArray = null
let endArray = null
let midArray = null
let targetArray = null

function topThreeChange() {
    let temp = null

    temp = startArray[startArray.length - 1]
    startArray.pop()
    targetArray.push(temp)
    temp = null

    temp = startArray[startArray.length - 1]
    startArray.pop()
    midArray.push(temp)
    temp = null

    temp = targetArray[targetArray.length - 1]
    targetArray.pop()
    midArray.push(temp)
    temp = null

    temp = startArray[startArray.length - 1]
    startArray.pop()
    targetArray.push(temp)
    temp = null

    temp = midArray[midArray.length - 1]
    midArray.pop()
    startArray.push(temp)
    temp = null

    temp = midArray[midArray.length - 1]
    midArray.pop()
    targetArray.push(temp)
    temp = null

    temp = startArray[startArray.length - 1]
    startArray.pop()
    targetArray.push(temp)
    temp = null

    console.log('-------以下為執行一次換 3 個-------')
    console.log(array1)
    console.log(array2)
    console.log(array3)
}

function switchArray(n) {
    if (n % 2 === 1) {
        startArray = array1
        midArray = array2
        targetArray = array3
    } else {
        startArray = array1
        midArray = array3
        targetArray = array2
    }
}

function checkArrayEmpty() {
    if (array1.length > 1) {
        const temp = array1[array1.length - 1]
        midArray.push(temp)
        array1.pop()
    } else if (array1.length === 1) {
        const temp = array1[array1.length - 1]
        array3.push(temp)
        array1.pop()
        console.log('--------array1 清空，頭尾對調------')
        console.log(array1)
        console.log(array2)
        console.log(array3)
        return
    }
}

function main(n) {
    initArray(n)
    console.log('-------以下為初始化之情況-------')
    console.log(array1)
    console.log(array2)
    console.log(array3)
    console.log(' ')

    switchArray(n)
    while (array1.length > 0) {
        topThreeChange()
        checkArrayEmpty()
        let temp = startArray
        startArray = targetArray
        targetArray = midArray
        midArray = temp
    }

    // topThreeChange()
}

function initArray(n) {
    for (let i = n; i > 0; i--) {
        array1.push(i)
    }
}

main(6)
console.log(' ')
console.log('-------以下為最終結果-------')
console.log(array1)
console.log(array2)
console.log(array3)
