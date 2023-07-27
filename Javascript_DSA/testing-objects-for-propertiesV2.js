function checkObj(obj, checkProp) {
  // Only change code below this line

  
  // if(obj.hasOwnProperty(checkProp)) {
  //   return obj[checkProp];
  // }
  // else {
  //   return "Not Found"
  // }


  return obj.hasOwnProperty(checkProp) ? obj[checkProp]: "Not Found";
  // Only change code above this line
}