let myArray = ["a", "b", "c", "d"];
// Only change code below this line
  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] === myArray[1]) {
        myArray[i] = "nice";
    }
  }
// Only change code above this line
console.log(myArray);