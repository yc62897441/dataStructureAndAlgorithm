// 把 Bubble sort 優化
// 在 Best case 時，performance 可以從 n^2 變成 n

function improvedBubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        console.log(`第${i}輪`)
        let swapping = false
        for (let j = array.length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                const temp = array[j - 1]
                array[j - 1] = array[j]
                array[j] = temp
                swapping = true
            }
        }
        // 表示如果陣列中的所有 element 的順序已經沒有任何需要 swap，則可以結束 sort function
        if (!swapping) {
            console.log(array)
            return
        }
    }
    console.log(array)
}

console.log('The Best Case:')
improvedBubbleSort([0, 1, 2, 3, 4])

console.log('==============')

console.log('The Worst Case:')
improvedBubbleSort([4, 3, 2, 1, 0])
