//Given the array nums. Write a function to calculate sum of all element in the array
//e.g:- I/P:-nums=[5, 4, 0, 2, 1]; O/P:-12

function sumOfAllNumberInArray(n) {
    if (n === 0) {
        return arr[n];
    }
    return arr[n] + sumOfAllNumberInArray(n - 1);
}

const arr = [5, 3, 2, 0, 1];
console.log(sumOfAllNumberInArray(arr.length - 1))