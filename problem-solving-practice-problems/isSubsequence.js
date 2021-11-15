// Multiple pointers problem

// Problem: Write a function that takes in two strings and checks whether the characters
// in the first string form a subsequence of characters in the second string. In other words, check
// if the characters in the first string appear somewhere in the second string, without the order changing
function isSubsequence(str1, str2) {
    if(str1.length > str2.length) {
        return false;
    }

    let i = 0;
    for(let j = 0; j < str2.length; j++) {
        if(str1[i] === str2[j]) {
            i++;
        }
        if(str1.length === i) {
            return true;
        }
    }

    return false;
}

console.log(isSubsequence('abc', 'acb'));
                   