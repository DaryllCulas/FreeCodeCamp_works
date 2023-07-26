function checkObj(obj, checkProp) {
  // Only change code below this line

  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  
  // Only change code above this line

}

// checkObj({gift:"pony", pet:"kitten", bed:"sleigh"}, "gift", "pet", "house");
// checkObj({city:"Seattle"}, "city", "district");