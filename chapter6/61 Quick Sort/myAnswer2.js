// 宣告一個陣列 array1
const array1 = [5, 1, 3, 2, 6, 0, 7, 4, 4, 1, 5, 2, 9, 6, 3, 4, 5, 4]

// 宣告 partition 函式，該函式將用來協助 quick sort，分割 array 並排序
function partition(startIndex, pivotIndex, array) {
    // 若 pivotIndex 小於等於 startIndex，表示已完成排序，回傳結果
    if (pivotIndex <= startIndex) return

    // 宣告一個指標 pointer，並把它指向 startIndex
    let pointer = startIndex

    // 使用迴圈將 array 中的每個元素與 pivot 做比較，把小於 pivot 的元素移到陣列左側，並讓 pointer 向右移動
    for (let i = startIndex; i < pivotIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            const temp = array[pointer]
            array[pointer] = array[i]
            array[i] = temp
            pointer++
        }
    }

    // 把 pivot 與 pointer 所指向的元素交換位置，確定 pivot 在陣列中的正確位置
    const temp = array[pointer]
    array[pointer] = array[pivotIndex]
    array[pivotIndex] = temp

    // 分別對 pivot 左側與右側的子陣列進行 partition 遞迴操作
    partition(startIndex, pointer - 1, array)
    partition(pointer + 1, pivotIndex, array)
}

// 宣告 quickSort 函式，該函式將用來對 array 進行快速排序
function quickSort(array) {
    // 呼叫 partition 函式並傳入參數，開始對 array 進行快速排序
    partition(0, array.length - 1, array)
}

// 呼叫 quickSort 函式並傳入參數 array1，對 array1 進行快速排序
quickSort(array1)

// 印出排序後的 array1
console.log(array1)
