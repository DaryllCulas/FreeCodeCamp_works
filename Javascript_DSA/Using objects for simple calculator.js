function funcCalcObj(operation, num1, num2) {
    let result = "";

    const operationsObj = {
        "addition": (num1, num2) => {
            return num1 + num2;
            
        },
        
        "subtraction": (num1, num2) => {
            return num1 - num2;
        },
        
        "multiplication": (num1, num2) => {
            return num1 * num2;
        },
        "division": (num1, num2) => {
            return num1 / num2;
        }
        
    };

    result = operationsObj[operation](num1, num2);
    

    return result;
}

operation = window.prompt("Enter your operation to be used:");
num1 = parseInt(window.prompt("Enter your First Number:"));
num2 = parseInt(window.prompt("Enter your Second Number:"));
alert(`Your answer is: ${calculatorObj(operation, num1, num2)}`);