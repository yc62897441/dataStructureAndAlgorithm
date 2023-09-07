// const arr = [-11, -5, -3, -2, 0, 4, 7, 8, 9, 10, 15] // sorted
const arr = [-11, -5, 0, 4, 7, 8, 9, 10, 15, -3, -2] // unsorted
const average = 2

// 教案解法 pointer
// 只能用在 sorted array
// function averagePair(arr, average) {
//     let count = 0
//     let startIndex = 0
//     let endIndex = arr.length - 1
//     const result = []

//     while (startIndex < endIndex) {
//         let aver = (arr[startIndex] + arr[endIndex]) / 2
//         if (aver > average) {
//             endIndex--
//         } else if (aver < average) {
//             startIndex++
//         } else {
//             result.push([arr[startIndex], arr[endIndex]])
//             endIndex--
//             startIndex++
//         }
//         count++
//     }
//     console.log('count', count) // count 7
//     return result
// }

// 我的解法
// 不限定只能用在 sorted array
function averagePair(arr, average) {
    let count = 0
    const counter = {}
    const result = []

    for (let i = 0; i < arr.length; i++) {
        const pairTarget = average * 2 - arr[i]
        if (counter[pairTarget] !== undefined) {
            result.push(`${arr[i]} at ${i}, ${pairTarget} at ${counter[pairTarget]}`)
        } else {
            counter[arr[i]] = i
        }
        count++
    }
    console.log('count', count) // count 11
    return result
}

console.log(averagePair(arr, average))
