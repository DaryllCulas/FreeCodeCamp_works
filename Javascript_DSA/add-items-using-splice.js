function htmlColorNames(arr) {
  // Only change code below this line
const index = 0;
const amountTodelete = 2;

arr.splice(index, amountTodelete, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));