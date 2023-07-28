function randomWholeNum() {
let randomWholeNum = 0;

while(randomWholeNum === 0) {
  randomWholeNum = Math.random() * 10;
}

  return Math.floor(Math.random(randomWholeNum) * 20);
}