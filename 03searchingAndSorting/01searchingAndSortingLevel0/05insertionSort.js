
//my method
function insertionSort(arr) {
    const n = arr.length;
    let newArr = [];
    console.log("Original array: ", arr)
    for (let i = 0; i < n - 1; i++){
        let elem = i + 1;
        console.log("elem in ", i, ": ", arr[elem])
        for (let j = i; j >= 0; j--){
            console.log("arr[j] in ", i, ": ", arr[j]);
            if (arr[elem] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[elem];
                arr[elem] = temp;
                elem--;
            }
        }
        
        for (let k = 0; k < n; k++){
            newArr.push(arr[k])
        }
        console.log("Iteration ", i, ": ", newArr)
        newArr = [];
    }
    return arr;
}

//better method
function insertionSort2(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

const arr = [7, 4, 3, 5, 1, 2];
console.log(insertionSort(arr));
console.log(insertionSort2(arr));