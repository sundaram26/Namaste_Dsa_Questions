//Given the number n. Write the function to calculate the sum of that given number.
//I/P:- n=5; O/P:-15

function sumOfNumber(num) {
    if (num === 0) return 0;
    return num + sumOfNumber(num - 1);
}

console.log(sumOfNumber(5))