function p1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i == k || i == j || j == k) {
          continue;
        }
        console.log(arr[i] + " " + arr[j] + " " + arr[k]);
      }
    }
  }
}

function permutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        if (i == k || j == k) {
          continue;
        }
        console.log(arr[i] + " " + arr[j] + " " + arr[k]);
      }
    }
  }
}

let result = [];

perm(["A", "B", "C"], 0);
console.log(result);

function perm(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
  } else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      perm(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function swap(arr, n1, n2) {
  let temp = arr[n2];
  arr[n2] = arr[n1];
  arr[n1] = temp;
}
