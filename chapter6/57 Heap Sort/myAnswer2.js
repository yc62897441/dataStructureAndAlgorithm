// 問題
// 寫出 heap sort function

// 第二次寫的解答
const array = [2, 3, 7, 8, 1, 9, 6, 5, 0, -1, -1, -8, 4, 5, 2, 1, 4, 1, 2, 8, -5, -2, -1]

function buildMax(rootIndex, array) {
    const leftChildIndex = rootIndex * 2 + 1
    const rightChildIndex = rootIndex * 2 + 2
    let maxValueIndex = rootIndex

    // 找出 sub-tree 中最大值的 index
    if (array[leftChildIndex] > array[maxValueIndex]) {
        maxValueIndex = leftChildIndex
    }
    if (array[rightChildIndex] > array[maxValueIndex]) {
        maxValueIndex = rightChildIndex
    }

    // 如果最大值的 index 不是 rootIndex，則把最大值換到 root，並對以該 child node 為 root 的 sub-tree 再進行 buildMax() 檢查。
    if (rootIndex !== maxValueIndex) {
        const temp = array[rootIndex]
        array[rootIndex] = array[maxValueIndex]
        array[maxValueIndex] = temp

        buildMax(maxValueIndex, array)
    }
}

function buildMaxHeap(array) {
    for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
        buildMax(i, array)
    }
}

function heapSort(array) {
    const result = []

    buildMaxHeap(array)

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[0])
        array[0] = array[i]
        array.pop()

        if (i > 0) {
            buildMax(0, array)
        }
    }
    return result
}

console.log(array)
console.log(heapSort(array))
