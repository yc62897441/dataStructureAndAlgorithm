const arr = ['A', 'B', 'C']
const result = []

pp(arr, 0)
console.log('result', result)

function pp(arr, starter) {
    if (starter >= arr.length) {
        result.push([...arr])
    } else {
        for (let i = starter; i < arr.length; i++) {
            swap(arr, starter, i)
            pp(arr, starter + 1)
            swap(arr, starter, i)
        }
    }
}

function swap(arr, n1, n2) {
    const temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
}
