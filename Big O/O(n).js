const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();
  array.forEach((element, i) => {
    if (element == "nemo") {
      console.log(i, "Founde nemo");
    }
  });

  let t1 = performance.now();
  console.log("Call to find nemo took " + (t1 - t0) + " ms");
}

findNemo(nemo); //O(n) --> Linear Time

// Linear notation is the most common notation used to describe the performance of an algorithm. It describes the relationship between the input size and the number of operations performed by the algorithm. The number of operations is directly proportional to the input size. The input size is the number of elements in the input array.

// O(n) is the best notation to use when describing the performance of an algorithm. It is the most common notation used to describe the performance of an algorithm. It describes the relationship between the input size and the number of operations performed by the algorithm. The number of operations is directly proportional to the input size. The input size is the number of elements in the input array.

