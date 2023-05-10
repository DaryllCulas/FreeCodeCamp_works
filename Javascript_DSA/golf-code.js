const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes === 1) {
    par = names[0]; // Hole-in-one
      return par;
}
else if(strokes <= par-2) {
    par = names[1]; // Eagle
      return par;
}
else if(strokes == par-1) {
    par = names[2]; // Birdie
      return par;
}
else if(strokes === par) {
     par = names[3]; // Par
      return par;
}
else if(strokes == par + 1) {
    par = names[names.length-3]; // Bogey
      return par;
}
else if(strokes == par + 2) {
    par = names[names.length-2]; // Double Bogey
      return par;
}
else if(strokes >= par + 3) {
    par = names[names.length-1]; // Go Home
      return par;
}
 
  // Only change code above this line
}

golfScore(5, 4);