const layers = 1

const array1 = []
const array2 = []
const array3 = []

initArray(layers)
console.log('-------以下為初始化之情況-------')
console.log(array1)
console.log(array2)
console.log(array3)
console.log(' ')

let startArray = array1
let middleArray = array2
let targetArray = array3

function initArray(layers) {
    for (let i = layers; i > 0; i--) {
        array1.push(i)
    }
}
// ===================================

function hanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
  
    hanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    hanoi(n - 1, auxiliary, source, destination);
  }
  
  // 使用範例
  hanoi(2, "A", "B", "C");