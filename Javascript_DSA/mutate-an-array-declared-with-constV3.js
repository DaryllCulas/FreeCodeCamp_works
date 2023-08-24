const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
for(let i = 0; i < s.length; i++) {
  // if(s[i] === 5) {
  //   s[i] = 2;
  // }
  // else if(s[i] === 7) {
  //   s[i] = 5;
  // }
  // else if(s[i] === 2) {
  //   s[i] = 7;
  // }

    s[i] = (s[i] === 5) ? 2
          : (s[i] === 7) ? 5
          : 7;



}

  // Using s = [2, 5, 7] would be invalid



  // Only change code above this line
}
editInPlace();