// ============ STEP 5: LOOK BACK AND REFACTOR ============

// Refactoring Questions:
// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand it at a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

// Here is a function that gives the count for each alpha numeric character
function charCount(str) {
    var obj = {};
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

// Refactor #1 - Use a for of loop
function charCount1(str) {
    var obj = {}
    for(var char of str) {
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

// Refactor #2 - simplify if else block
function charCount2(str) {
    var obj = {}
    for(var char of str) {
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// Refactor #3 - Use character codes instead of regex (which is slower)
function charCount3(str) {
    var obj = {}
    for(var char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// Helper function to calculate character codes
function isAlphaNumeric(char) {
    var code = char.chatCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z) 
       !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    } 
    return true;
}