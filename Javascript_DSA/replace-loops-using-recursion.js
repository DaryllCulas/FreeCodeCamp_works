function sum(arr, n) {
  // Only change code below this line

/*      FOR LOOPS      */

// let sum = 0;
// for(let i = 0; i < n; i++) {
//   sum += arr[i];
// }
// return sum;

/*==================================*/

/*        RECURSION    */

// if(n <= 0) {
//     return 0;
// }
// else {
//   return sum(arr, n-1) + arr[n-1];
// }

    return n <= 0 ? 0: sum(arr, n-1) + arr[n-1];
  // Only change code above this line
}