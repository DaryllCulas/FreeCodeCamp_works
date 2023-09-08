function factorialize(num) {
  let product = 1;
  for(let i = num; i >= 1; i--) {
    product *= i; 
  }
  return product;
}

factorialize(5);