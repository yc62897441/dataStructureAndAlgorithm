// 問題
// 寫一個 function，收集所以在 array of arrays 中的值，並收集到且回傳 array。

// 我的解答
let arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]]

function deconstructArr(arrs) {
    const result = []
    fn(arrs)

    function fn(array) {
        array.forEach((element) => {
            if (Array.isArray(element)) {
                fn(element)
            } else {
                result.push(element)
            }
        })
    }

    return result
}
console.log(deconstructArr(arrs)) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// 教案解答
// 多封裝一層
function collector(array1) {
    const result = []
    helper(array1)
    return result

    function helper(array2) {
        for (let i = 0; i < array2.length; i++) {
            if (Array.isArray(array2[i])) {
                helper(array2[i])
            } else {
                result.push(array2[i])
            }
        }
    }
}
console.log(collector(arrs))
