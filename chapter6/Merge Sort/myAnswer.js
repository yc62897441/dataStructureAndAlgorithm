// 問題
// 寫出 merge sort function

// 把 array 切分到長度為 1 的 array(如此即是sorted的狀態)，再透過 merge() 把 sorted array 慢慢拼接起來
function mergeSort(array) {
    if (array.length === 1) {
        return array
    } else {
        const left = array.slice(0, Math.floor(array.length / 2))
        const right = array.slice(Math.floor(array.length / 2), array.length)
        return merge(mergeSort(left), mergeSort(right))
    }
}
// 把兩個 sort array 合併成一個 sort array
function merge(array1, array2) {
    const result = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i])
            i++
        } else {
            result.push(array2[j])
            j++
        }
    }

    // 以下只會執行其中一個 while loop，把剩餘的 element push 到 result
    while (i < array1.length) {
        result.push(array1[i])
        i++
    }
    while (j < array2.length) {
        result.push(array2[j])
        j++
    }
    return result
}

console.log(mergeSort([5, 1, 4, 0, 3, 2, 6, -1, 7, -2]))
