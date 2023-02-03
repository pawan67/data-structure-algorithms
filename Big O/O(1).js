boxes = [0, 1, 2, 3, 4, 5];

// Example 1
function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

// O(1) --> Constant Time
// The number of operations is not dependent on the input size. The number of operations is always the same regardless of the input size. The input size is the number of elements in the input array.

// Example 2
function logFirstTwoBox(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBox(boxes); // O(2) --> Constant Time
