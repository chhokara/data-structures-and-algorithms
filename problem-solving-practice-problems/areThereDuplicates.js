// Frequency counter/Multiple pointers problem

// Problem: Write a function called areThereDuplicates which accepts a variable number
// of arguments and checks whether there are any duplicates among the arguments passed in.

// multiple pointers pattern
// function areThereDuplicates(...args) {
//     args.sort((a, b) => a - b);
//     let i = 0;
//     for(let j = 1; j < args.length; j++) {
//         if(args[i] === args[j]) return true;
//         i++;
//     }
//     return false;
// }

// frequency counter approach
function areThereDuplicates1(...args) {
    let freqCounter = {};

    for(let val of args) {
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }

    for(let key in freqCounter) {
        if(freqCounter[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates1(1,2,3,5,2));
