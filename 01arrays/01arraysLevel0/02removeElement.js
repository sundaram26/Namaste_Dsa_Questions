//Return the array length after removing the given matching element
//nums = [3, 2, 2, 3] and k = 3 then ans will be [2, 2, 3, 3] then return 2

function removeElement(arr, elem) {
    let s = 0;
    for (let i = 0; i < arr.length; i++){
        // console.log("Value of s: ", arr[s])
        if (arr[i] !== elem) {
            arr[s] = arr[i];
            s++;
        }
    }
    return s;
}

const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3))