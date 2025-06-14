//write a function that return the largest number from array

const arr = [3, 4, 5, 2, 1, 19];

function largestElement(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

const result = largestElement(arr);

console.log(result);
