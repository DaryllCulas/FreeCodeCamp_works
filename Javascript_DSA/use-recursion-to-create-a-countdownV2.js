// Only change code below this line
function countdown(n){
  if(n <= 0) {
    return [];
  }
  else {
    const countDownArray = countdown(n-1);
    countDownArray.unshift(n);
    return countDownArray;
  }

}
// Only change code above this line

//countdown(10);