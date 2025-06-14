//write a function that searches the element in an array and returns the index, if the element is not present then just return "-1"

const arr = [3, 4, 5, 2, 1, 19];

function searchElement(arr, ele) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === ele) {
            return i
        }
    }
    return -1;
}

const result = searchElement(arr, 2);

console.log(result);