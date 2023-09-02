let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
function foodArr(foods) {
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;

  return foods;
}

console.log(foodArr(foods));
// Only change code above this line

