//  Log all pairs of array

const boxes = [1, 2, 3, 4, 5];

function logAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairs(boxes);

// O(n*n) = O(n^2) ==> Quadratic Time