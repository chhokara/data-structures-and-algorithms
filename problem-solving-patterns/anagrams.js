// given two strings, write a function to determine if the second string is an anagram of the first

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists in lookup then increment, otherwise set it 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if letter does not exist in lookup, or has a value of zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('anagram', 'gramanam'));