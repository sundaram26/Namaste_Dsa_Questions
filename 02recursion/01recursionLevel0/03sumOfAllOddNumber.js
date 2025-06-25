//find sum of odd element of array using recursion


function sumOfOddNumber(n) {
    let isOdd = ((arr[n] % 2) != 0);
    if (n == 0) {
        return isOdd ? arr[n] : 0;
    }
    return ((isOdd ? arr[n] : 0) + sumOfOddNumber(n - 1));
}

const arr = [5, 3, 2, 10, 1];
console.log(sumOfOddNumber(arr.length - 1));