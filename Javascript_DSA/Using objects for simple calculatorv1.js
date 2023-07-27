function calculatorObj(ops, num1, num2) {
  
  let result = "";
  const lookObj = {
    "addition": function add(num1, num2) {
      return num1 + num2;
    },
    "subtraction": function minus(num1, num2) {
      return num1 - num2;
    },
    "multiplication": function times(num1, num2) {
      return num1 * num2;
    },
    "division": function divide(num1, num2) {
      return num1 / num2;
      
    }
  };

result = lookObj[ops](num1,num2);
  
  return result;

 
}

calculatorObj("division", 45, 9);