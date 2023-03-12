// 問題
// 寫一個 function，收集所以在 array of arrays 中的值，並收集到且回傳 array。

// 我的解答
let arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]]

const aaa = []
function fs(array) {
    array.forEach((element) => {
        if (typeof element === 'object') {
            fs(element)
        } else {
            aaa.push(element)
        }
    })
}
fs(arrs)
console.log(aaa)

// 多封裝一層
function collector(array1) {
    const result = []
    const helper = (array2) => {
        for (let i = 0; i < array2.length; i++) {
            if (Array.isArray(array2[i])) {
                helper(array2[i])
            } else {
                result.push(array2[i])
            }
        }
    }
    helper(array1)
    return result
}
console.log(collector(arrs))
