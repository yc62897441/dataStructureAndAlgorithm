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
