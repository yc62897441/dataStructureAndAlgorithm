// 我的解答
function uniqueLetterString(str) {
    const counter = {}
    let start = 0
    let end = 0
    let maxLength = 0

    while (start < str.length) {
        if (counter[str[end]] === undefined && end < str.length) {
            counter[str[end]] = end
            end++
            if (end - start > maxLength) {
                maxLength = end - start
            }
        } else if (counter[str[end]] !== true) {
            start = counter[str[end]] + 1
            counter[str[end]] = end
            for (const property in counter) {
                if (counter[property] < start) {
                    counter[property] = undefined
                }
            }
            end++
        }
    }
    return maxLength
}
console.log(uniqueLetterString('thisishowwedoit')) // 6
console.log(uniqueLetterString('abccbazazbcdefefdcba')) // 7

// 教案解法
// function uniqueLetterString(str) {
//     let start = 0
//     let end = 0
//     let counter = {}
//     let maxLength = -Infinity

//     while (end < str.length) {
//         // console.log(counter)
//         if (counter[str[end]]) {
//             counter[str[start]]--
//             start++
//         } else {
//             counter[str[end]] = 1
//             end++
//             if (end - start > maxLength) {
//                 maxLength = end - start
//             }
//         }
//     }

//     if (maxLength == -Infinity) {
//         console.log('Cannot find unique letters substring.')
//         return null
//     }

//     console.log(maxLength)
//     return maxLength
// }
// uniqueLetterString('thisishowwedoit')
// uniqueLetterString('abccbazazbcdefefdcba')
