const arr = [0, 2, 3, 5, 8, 9, 10, 11]
const target = 8
console.log(binarySearch(arr, target))

function binarySearch(arr, target) {
    let min = 0
    let max = arr.length - 1
    let step = 0

    while (min <= max) {
        step++
        let middle = Math.floor((max + min) / 2)

        if (target > arr[middle]) {
            min = middle + 1
        } else if (target < arr[middle]) {
            max = middle - 1
        } else {
            console.log('總經過步數：', step)
            return middle
        }
    }
    console.log('總經過步數：', step)
    return -1
}
