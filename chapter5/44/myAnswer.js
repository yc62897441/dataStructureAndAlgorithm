// 問題
// 寫出 insertion sort

// 我的答案
function aa(array) {
    let sortedAnswer = []
    sortedAnswer.push(array[0])
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i
        while (j >= 0) {
            if (sortedAnswer[j - 1] > key) {
                sortedAnswer[j] = sortedAnswer[j - 1]
                j--
                // console.log(sortedAnswer)
            } else {
                sortedAnswer[j] = key
                // console.log(sortedAnswer, '要break')
                break
            }
        }
        // console.log('===')
    }
    return sortedAnswer
}
console.log(aa([1, 3, 4, 2, 5, 0]))


// 教案解答
let unsorted = [14, -4, 17, 6, 22, 1, -5];

insertionSort(unsorted);

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }

  console.log(arr);
  return arr;
}
