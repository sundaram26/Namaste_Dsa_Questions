//linear search
//e.g:- arr = [4, 9, 1, 0, 2]; target = 0 then O/P:- 3

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [4, 9, 1, 0, 2];
const target = 0;
console.log(linearSearch(arr, target));