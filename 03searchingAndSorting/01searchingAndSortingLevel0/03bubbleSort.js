//bubble sort


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let isSwapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

const arr = [5, 4, 0, 1, 2, 12, 9, 8, 3, 2, 1];
console.log(bubbleSort(arr));