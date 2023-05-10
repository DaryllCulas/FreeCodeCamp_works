function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removedArr = arr.shift(item);

  return removedArr;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];
let testArr2 =[5, 6, 7, 8, 9];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));