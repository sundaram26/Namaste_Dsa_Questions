//write a function that counts the number of negative element in the array

const arr = [3, -4, 5, 2, 1, 19];

function countNegativeElement(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

const result = countNegativeElement(arr);

console.log(result);
