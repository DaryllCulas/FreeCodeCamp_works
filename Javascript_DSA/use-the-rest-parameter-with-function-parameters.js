// const product = (n1, n2, n3) => {
//   const args = [n1, n2, n3];
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(product(2, 4, 6)); //48



const sum = (...args) => {

  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}



