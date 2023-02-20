const arr1 = [1, 2, 3, 5, 6]
const arr2 = [2, 3, 4, 6, 7]

// 我的解法
// function intersection(arr1, arr2) {
//     const result = []
//     arr1.forEach((item) => {
//         if (arr2.includes(item)) {
//             result.push(item)
//         }
//     })
//     return result
// }

// 教案解法 counter
function intersection(arr1, arr2) {
    const counter = {}
    const arr3 = arr1.concat(arr2)
    const result = []

    arr3.forEach((item) => {
        if (!counter[item]) {
            counter[item] = 1
        } else {
            counter[item]++
        }
    })

    for (let property in counter) {
        if (counter[property] > 1) {
            result.push(Number(property))
        }
    }
    return result
}

console.log(intersection(arr1, arr2))
