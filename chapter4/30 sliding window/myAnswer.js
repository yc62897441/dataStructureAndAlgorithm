// 我的解答
function slidingWindow(array, number) {
    if (array.length < number) return null

    // 找出起始相加的最大值、最小值
    let maxSum = 0
    let minSum = 0
    for (let i = 0; i < number; i++) {
        maxSum = maxSum + array[i]
        minSum = minSum + array[i]
    }

    // 開始跑回圈，刪掉地一個數，加上下一個數。
    for (let i = 0; i <= array.length - number; i++) {
        let tempMaxSum = maxSum - array[i] + array[i + number]
        let tempMinSum = minSum - array[i] + array[i + number]
        if (tempMaxSum > maxSum) maxSum = tempMaxSum
        if (tempMinSum < minSum) minSum = tempMinSum
    }
    return [maxSum, minSum]
}
console.log(slidingWindow([2, 7, 3, 0, 1, -5, -12, -11], 3))

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
console.log(maxSum([2, 7, 3, 0, 1, -5, -12, -11], 3))

// 教案 improved 解法
function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let temValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}