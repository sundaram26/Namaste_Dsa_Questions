//check if number is palindrome or not e.g:- 121 from left and right both ways number is 121 so this is palindrome

function palindromeNumber(num) {
    let temp = 0;
    let n = num;
    while (n > 0) {
        let rem = n % 10;
        temp = temp * 10 + rem;
        n = Math.floor(n/10);
    }
    console.log(temp)
    console.log(num)
    if (temp == num) {
        return true
    }
    return false
}

console.log(palindromeNumber(-121))