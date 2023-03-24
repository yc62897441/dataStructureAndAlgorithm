// 問題
// 寫出 quick sort function
const array = [4, 8, 7, 2, 1, 3, 6, 5, -1, 9, -2, -5, 10, -3, -4, 0, 1, 8, 3, -2, 4, 0, 4, -2, -3, 4, -2]

function partition(startIndex, endIndex) {
    // 定義結束條件
    if (startIndex >= endIndex) return

    const lastElementValue = array[endIndex]
    let pointer = startIndex // array 中第一個 >= lastElementValue 的 element 的 index

    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] < lastElementValue) {
            const temp = array[i]
            array[i] = array[pointer]
            array[pointer] = temp
            pointer++
        }
    }

    // 把最後一個 element 交換到 array 的中間位置，左邊都是比這個 element 小的值，右邊都是大於等於這個 element 的值
    array[endIndex] = array[pointer]
    array[pointer] = lastElementValue

    partition(startIndex, pointer - 1)
    partition(pointer + 1, endIndex)
}

function quickSort() {
    partition(0, array.length - 1)
}

quickSort()
console.log(array)
