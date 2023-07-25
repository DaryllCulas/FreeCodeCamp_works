function testSize(num) {
  // Only change code below this line
let size = "";

  if(num < 5) {
    size = "Tiny";
  }
  else if(num < 10) {
    size = "Small";
  }
  else if(num < 15) {
    size = "Medium";
  }
  else if(num < 20) {
    size =  "Large";
  }
  else if(num >= 20) {
    size = "Huge";
  }

  return size;
  // Only change code above this line
}

testSize(7);