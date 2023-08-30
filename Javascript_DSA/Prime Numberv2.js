const primeNum = (n) => {
    if(n < 2) {
        return false;
    }
    else {
        for(let i = 2; i < Math.sqrt(n); i++) {
            if(n === 2 || n === 3 || n === 5 || n === 7) {
                return true;
            }
        }
    return false;
    }
}

console.log(primeNum(5)); // true
console.log(primeNum(8)); // false


// Big-O = 0(sqrt(n))