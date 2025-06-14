//write a function to return second largest value

const arr = [3, 4, 5, 2, 1, 19];

function secondLargestElement(arr) {
    let largest = secondL = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondL = largest;
            largest = arr[i];
        } else if (arr[i] > secondL) {
            secondL = arr[i];
        }
    }
    return secondL;
}

const result = secondLargestElement(arr);

console.log(result);
