

const reverseInteger = (num) => {
    const nCopy = num;
    let rev = 0;
    num = Math.abs(num);
    while (num > 0) {
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return nCopy  < 0 ? -rev : rev;
}

console.log(reverseInteger(1432));