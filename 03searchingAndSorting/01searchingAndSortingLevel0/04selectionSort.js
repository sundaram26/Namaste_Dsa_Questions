

function selectionSort(arr) {
    const n = arr.length;
    let newArr = []
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
            //checking min
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        //swap
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

        for (let i = 0; i < n; i++){
            newArr.push(arr[i])
        }
        console.log("iteration: ", i, newArr)
        newArr = [];
    }
    return arr;
}

const arr = [7, 1, 5, -10, 12, 13, -1, -3, 4, 3, 2];
console.log(selectionSort(arr));