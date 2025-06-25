//Given an integer n, return true if it is a power of two.Otherwise, return false.
//An integer n is a power of two, if there exists an integer x such that n == 2^x.
//e.g:- I/P: n=1; O/P: true; explaination: 2^0 = 1;

function powerOfTwo(n) {
    if (n === 1) return true;
    if (n < 1 || n % 2 !== 0) return false;

    return powerOfTwo(n / 2);
}

let n = 3;
console.log(powerOfTwo(n));