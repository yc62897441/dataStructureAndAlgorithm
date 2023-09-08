// 我的解答
// console.log(slidingWindow([2, 7, 3, 0, 12, 1, -5, -12, -11], 3)) // [ 15, -28 ]
console.log(slidingWindow([8, 5, 9, 3, 2, 6, 14, 6, 2, 11], 3)) // [ 26, 11 ]
function slidingWindow(array, number) {
    if (array.length < number) return null

    // 找出起始相加的最大值、最小值
    let maxSum = 0
    let minSum = 0
    for (let i = 0; i < number; i++) {
        maxSum = maxSum + array[i]
        minSum = minSum + array[i]
    }

    // 開始跑回圈，刪掉第一個數，加上下一個數。
    let tempMaxSum = maxSum
    let tempMinSum = minSum
    for (let i = 0; i <= array.length - number; i++) {
        tempMaxSum = tempMaxSum - array[i] + array[i + number]
        tempMinSum = tempMinSum - array[i] + array[i + number]
        if (tempMaxSum > maxSum) maxSum = tempMaxSum
        if (tempMinSum < minSum) minSum = tempMinSum
    }
    return [maxSum, minSum]
}

// 教案解法
function maxSum(arr, size) {
    if (arr.length < size) return null

    let max_value = -Infinity
    for (let i = 0; i <= arr.length - size; i++) {
        let attempt = 0
        for (let j = i; j < i + size; j++) {
            attempt = attempt + arr[j]
        }
        if (attempt > max_value) max_value = attempt
    }
    return max_value
}
console.log(maxSum([2, 7, 3, 0, 12, 1, -5, -12, -11], 3))

// 教案 improved 解法
function maxSum(arr, size) {
    if (size > arr.length) {
        return null
    }

    let maxValue = 0
    for (let i = 0; i < size; i++) {
        maxValue += arr[i]
    }

    let temValue = maxValue
    for (let j = size; j < arr.length; j++) {
        temValue = temValue + arr[j] - arr[j - size]
        if (temValue > maxValue) {
            maxValue = temValue
        }
    }

    console.log(maxValue)
    return maxValue
}
