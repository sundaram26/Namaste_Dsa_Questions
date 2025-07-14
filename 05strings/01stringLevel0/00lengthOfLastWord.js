//Length of Last Word (Leetcode - 58)
//I/P:- s = "Hello world"
//O/P:- 5 -----> because world has 5 letter


function lengthOfLastWord(string) {
    s = string.trim();
    s = s.split(" ");
    
    return s[s.length - 1].length;
}

function lengthOfLastWord2(string) {
    let i = string.length - 1;
    let count = 0;
    while (i >= 0 && string[i] === ' ') i--;
    while (i >= 0 && string[i] !== ' ') {
        count++;
        i--;
    }

    return count;
}

function lengthOfLastWord3(string) {
    let i = string.length - 1;
    let count = 0;

    while (i >= 0) {
        if (string[i] !== ' ') {
            count++;
        } else if (count > 0) {
            break;
        }
        i--;
    }

    return count;
}

const str = "Hello World";
console.log("Length of Last Word with built in function: ", lengthOfLastWord(str))
console.log("Length of Last Word: ", lengthOfLastWord2(str))
console.log("Length of Last Word: ", lengthOfLastWord3(str))