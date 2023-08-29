const fac = (n) => {
    
    let product = 1;
    let bracket = [];
    for(let i = n; i >= 1; i--) {
        bracket.push(i);
            product *= i;
    }
        return `${bracket} = ${product}`;
}

console.log(fac(5));