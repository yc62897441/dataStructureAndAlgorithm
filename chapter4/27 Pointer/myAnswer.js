const arr = [-11, -5, -3, -2, 0, 4, 7, 8, 9, 10, 15] // sorted
const average = 2

function averagePair(arr, average) {
    let left = 0
    let right = arr.length - 1
    const result = []

    while (left < right) {
        const currentPairAverage = (arr[left] + arr[right]) / 2
        if (currentPairAverage > average) {
            right--
        } else if (currentPairAverage < average) {
            left++
        } else {
            result.push(`${arr[left]} at ${left}, ${arr[right]} at ${right}`)
            right--
            left++
        }
    }
    return result
}

console.log(averagePair(arr, average))
