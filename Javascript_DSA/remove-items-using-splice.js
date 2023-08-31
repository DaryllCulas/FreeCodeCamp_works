const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let sum = 0;
 arr.splice(1,4);
for(let i = 0; i < arr.length; i++) {
   
   sum += arr[i];
}


// Only change code above this line
console.log(sum);