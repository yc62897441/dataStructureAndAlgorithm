// 教案解法
function minSubArray(arr, sum) {
    let start = 0
    let end = 0
    let total = 0
    let minLength = Infinity

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total = total + arr[end]
            end++
        } else if (total >= sum) {
            let currentLength = end - start
            if (currentLength < minLength) {
                minLength = currentLength
            }
            total = total - arr[start]
            start++
        } else if (end >= arr.length) {
            break
        }
    }

    if (minLength === Infinity) {
        return -1
    } else {
        return minLength
    }
}

console.log(minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60))

// 我自己想的
console.log(minSubArray2([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60))
function minSubArray2(arr, targetSum) {
    let minLength = Infinity
    let tempMinLength = 0
    let tempSum = 0
    let index = 0

    while (index < arr.length) {
        if (tempSum < targetSum) {
            tempSum = tempSum + arr[index]
            index++
            tempMinLength++
        } else {
            if (tempMinLength < minLength) minLength = tempMinLength

            tempSum = tempSum - arr[index - tempMinLength]
            tempMinLength--
        }
    }

    // 遍歷完 array 後，把最後的 tempSum 一個一個減去其加入的值，看最小剩餘的長度為何
    while (tempSum >= targetSum) {
        if (tempMinLength < minLength) minLength = tempMinLength

        tempSum = tempSum - arr[index - tempMinLength]
        tempMinLength--
    }

    return minLength
}
