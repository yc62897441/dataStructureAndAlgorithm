// 問題
// 寫出 heap sort function

function heapSort(array) {
    let maxHeap = Math.floor((array.length - 1) / 2)
    let result = []

    // 建立 binary heap
    for (let i = maxHeap; i >= 0; i--) {
        buildTriangle(i, array)
    }

    // 從 binary heap 組合出 sort array
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[0])
        array[0] = array[i]
        array.pop()
        buildTriangle(0, array)
    }
    return result
}

// 找出三角形樹狀中，最大的值
function buildTriangle(i, array) {
    const m = i * 2 + 1
    const n = i * 2 + 2
    let largest = ''

    if (array[m] < array[n]) {
        largest = n
    } else {
        largest = m
    }

    // swap。
    if (array[i] < array[largest]) {
        const temp = array[i]
        array[i] = array[largest]
        array[largest] = temp

        // 如果有需要交換，換完之後還在再檢查更下一層
        buildTriangle(largest, array)
    }
}

const array1 = [0, -2, 12, 1, 2, 11, 3, 4, 6, 13, 14, 5, -1, 15, 7, 16, 8, 9, 10]
console.log(heapSort(array1))
