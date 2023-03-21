const layers = 2

const array1 = []
const array2 = []
const array3 = []

function main(n, start, middle, end) {
    if (n === 1) {
        const temp = start[start.length - 1]
        start.pop()
        end.push(temp)
        console.log('start to end')
        return
    }

    main(n - 1, start, end, middle)
    main(n - 1, middle, start, end)
}

function initArray(layers) {
    for (let i = layers; i > 0; i--) {
        array1.push(i)
    }
}

initArray(layers)
console.log('-------以下為初始化之情況-------')
console.log(array1)
console.log(array2)
console.log(array3)
console.log(' ')

main(layers, array1, array2, array3)
console.log('-------以下為結束之情況-------')
console.log(array1)
console.log(array2)
console.log(array3)
console.log(' ')
