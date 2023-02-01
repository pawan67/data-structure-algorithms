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

findNemo(nemo); //0(n) --> Linear Time
