function binarySearch(arr, target) {
    let min = 0
    let max = arr.length - 1
    let step = 0

    while (min <= max) {
        step
        let middle = Math.floor((max + min) / 2)

        if (target > arr[middle]) {
            middle = min + 1
        } else if (target < arr[middle]) {
            middle = max - 1
        } else {
            return middle
        }
    }

    return -1
}
