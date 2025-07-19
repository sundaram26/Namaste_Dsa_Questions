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

function validPalindromeII(string) {
    let s = 0;
    let e = string.length - 1;

    while (s < e) {
        if (!string[s].match(/[A-Za-z0-9]/)) s++;
        if (!string[e].match(/[A-Za-z0-9]/)) e--;
        if (string[s].toLowerCase() === string[e].toLowerCase()) {
            s++;
            e--;
        } else {
            return false;
        }
    }

    return true;
}

// const str = "A man, a plan, a canal: Panama";
const str = "ab";
console.log(validPalindromeII(str));