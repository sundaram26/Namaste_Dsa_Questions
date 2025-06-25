//Find the factorial of the given number using recursion.

function factorial(n) {
    if (n === 0) return 1;
    if (n < 0) return "Invalid";
    return n * factorial(n - 1);
}

const n = 4;
console.log(factorial(n));