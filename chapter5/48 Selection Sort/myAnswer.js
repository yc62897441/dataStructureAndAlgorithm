// 問題
// 寫出 selection sort function
function aa(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minValueIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minValueIndex]) {
                minValueIndex = j
            }
        }
        const temp = array[i]
        array[i] = array[minValueIndex]
        array[minValueIndex] = temp
    }
    console.log(array)
}
aa([1, 7, 4, 6, 2, 5, 3, 2, 6])

// 教案解答
let unsorted = [14, -4, 17, 6, 22, 1, -5];
selectionSort(unsorted);
function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }

  console.log(arr);
  return arr;
}
