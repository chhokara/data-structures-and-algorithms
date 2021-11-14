// Frequency counter problem

// Problem: Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits 
function sameFrequency(num1, num2) {
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();

    if(numStr1.length !== numStr2.length) {
        return false;
    }

    const freqCounter1 = {};
    const freqCounter2 = {};

    for(let i = 0; i < numStr1.length; i++) {
        let digit = numStr1[i];
        freqCounter1[digit] = (freqCounter1[digit] || 0) + 1;
    }

    for(let j = 0; j < numStr2.length; j++) {
        let digit = numStr2[j];
        freqCounter2[digit] = (freqCounter2[digit] || 0) + 1;
    }

    for(let key in freqCounter1) {
        if(freqCounter1[key] !== freqCounter2[key]) return false;
    }

    return true;

}