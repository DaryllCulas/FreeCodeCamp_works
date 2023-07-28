function randomRange(myMin, myMax) {

let randomRangeNum = 0;
  
while(randomRangeNum === 0) {
  randomRangeNum = Math.random();
}


  return Math.floor(Math.random(randomRangeNum) * (myMax - myMin + 1)) + myMin;
}