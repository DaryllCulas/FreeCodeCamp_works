let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};


let propertiesTodelete = ["oranges", "plums", "strawberries"];

for(let i = 0; i < propertiesTodelete.length; i++) {
    let propertiesName = propertiesTodelete[i];
    
    if(foods.hasOwnProperty(propertiesName)) {
        delete foods[propertiesName];
    }
}


console.log(foods);