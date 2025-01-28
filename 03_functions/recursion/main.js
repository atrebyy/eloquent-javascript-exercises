const isEven = (number) => {
    const check = (number) => {
        if (number == 0) return true;
        if (number == 1) return false;
        return (check(number - 2));
    }
    
    if (number < 0) number *= -1;
    return check(number);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??