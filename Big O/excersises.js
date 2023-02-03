// EXCERCISE 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
    

    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

// Answer: Big O(3 + 4n) -- (1+1+1 + n+n+n+n)

// =========================================================== //

// Excercise 2

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) { //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// Answer: Big O(4 + 7n)

// =========================================================== //

// Excercise 3
