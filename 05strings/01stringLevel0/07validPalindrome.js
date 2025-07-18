//Valid Palindrome (Leetcode - 125)
//I/P:- s = "A man, a plan, a canal: Panama"
//O/P:- true ---> exp:- amanaplanacanalpanama

function validPalindromeI(string) {
    if (string === " ") {
        return true;
    }
    let str = ""
    let s = string.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i].match(/[a-z0-9]/));
        if (s[i].match(/[a-z0-9]/)) {
            str = str + s[i];
        }
    }
    // let reverse = "";
    // for (let i = str.length - 1; i >= 0; i--){
    //     reverse = reverse + str[i];
    // }
    let reverse = str.split("").reverse().join("");
    // console.log(reverse, str)
    if (reverse === str) {
        return true;
    }

    return false;
}

const str = "A man, a plan, a canal: Panama";
// const str = " ";
console.log(validPalindromeI(str));