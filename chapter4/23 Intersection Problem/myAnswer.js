const arr1 = [1, 2, 4, 6, 7, 8, 9]
const arr2 = [2, 3, 5, 6, 7, 9, 10]
function intersection(arr1, arr2) {
    const result = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }

    return result
}
console.log(intersection(arr1, arr2))

// 我自己想的
function intersection2(arr1, arr2) {
    const result = []
    const table = {}

    for (let i = 0; i < arr1.length; i++) {
        const key = arr1[i]
        table[key] = arr1[i]
    }

    for (let j = 0; j < arr2.length; j++) {
        const key = arr2[j]
        if (table[key] !== undefined) result.push(arr2[j])
    }

    return result
}
console.log(intersection2(arr1, arr2))
