//return the number of unique element in an non-decreasing array
//I/P:- [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//O/P:- 5 (becase there is 5 unique element in the input array)

function numberOfUniqueElem(arr) {
    let elem = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[elem]) {
            elem = elem + 1;
            arr[elem] = arr[i];
        }
    }
    return elem + 1;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(numberOfUniqueElem(arr));