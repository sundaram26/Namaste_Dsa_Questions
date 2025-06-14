//write a function to count the digit of the number

function countDigit(num) {
    if (num == 0) {
        return 1
    }
    let count = 0;

    //converting negative number to positive
    num = Math.abs(num);
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countDigit(3994932852424));