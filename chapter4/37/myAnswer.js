// 問題
// 寫一個 function，收集所以在 array of arrays 中的值，並收集到且回傳 array。

// 我的解答
let arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h', ]]]]]]

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
function aa(array) {
    const result = []
    const bb = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                bb(array[i])
            } else {
                result.push(array[i])
            }
        }
    }
    bb(array)
    return result
}
console.log(aa(arrs))