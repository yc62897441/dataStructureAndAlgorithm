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

// 教案解答(不需要建立新的array，透過 heapSize 來控制 array 中某個 index 以後的 elements 已經被排序好了，不要再去更動到它們。)
let heapSize
let arr = [15, 3, 17, 18, 20, 2, 1, 666]
heapSort()
console.log(arr)

function buildMaxHeap() {
    heapSize = arr.length - 1
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(i)
    }
}

function maxHeapify(i) {
    let largest
    let l = i * 2 + 1
    let r = i * 2 + 2
    if (l <= heapSize && arr[l] > arr[i]) {
        largest = l
    } else {
        largest = i
    }

    if (r <= heapSize && arr[r] > arr[largest]) {
        largest = r
    }

    if (largest != i) {
        // swap A[i] with A[largest]
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        maxHeapify(largest)
    }
}

function heapSort() {
    buildMaxHeap()
    for (let i = arr.length - 1; i >= 0; i--) {
        // exchange A[0] with A[i]
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp
        heapSize -= 1
        maxHeapify(0)
    }

    return arr
}
