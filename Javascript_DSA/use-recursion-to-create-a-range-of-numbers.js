function rangeOfNumbers(startNum, endNum) {

if(startNum > endNum) {
  return [];
}
else {
  const Arr = rangeOfNumbers(startNum, endNum - 1);
  Arr.push(endNum);
  return Arr;
}

}