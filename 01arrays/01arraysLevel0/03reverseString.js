//Reverse the given string in array form
//e.g:- I/P: s = ["h", "e", "l", "l", "o"] then O/P:-["O", "l", "l", "e", "h"]

const reverseString = (arr) => {
    let s = 0;
    let e = arr.length - 1;

    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        e--;
        s++;
    }
    return arr;
}
const reverseString2 = (arr) => {
    let n = arr.length - 1;
    let nHalf = Math.floor(n/2)
    for (let i = 0; i < nHalf; i++){
        let e = n - 1 - i;
        let temp = arr[i];
        arr[i] = arr[e];
        arr[e] = temp;
    }
    return arr;
}

const s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s))
console.log(reverseString2(s))