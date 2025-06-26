//Find the nth fibonacci number using recursion
//F(0) = 0 & F(1) = 1 and if n > 1 then F(n) = F(n-1) + F(n-2)

function fib(n) {
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
}

const num = 9;
console.log(fib(num));