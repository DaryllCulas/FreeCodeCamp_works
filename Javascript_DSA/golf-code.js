const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line


if(strokes == 1) {
  par = names[0];
 
}
else if(strokes <= par-2) {
   par = names[1];
 
}
else if(strokes == par-1) {
   par = names[2];
  

}
else if(strokes == par) {
   par = names[3];
  

}
else if(strokes == par + 1) {
   par = names[4];
 
 
}
else if(strokes == par + 2) {
   par = names[5];
 
}
else if(strokes >= par + 3) {
  par = names[6];
 
 
}

  return par;
  // Only change code above this line
}

golfScore(5, 4);