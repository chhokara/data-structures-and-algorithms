// ============ STEP 4: SOLVE OR SIMPLIFY =================

// start solving the problem or start solving a simpler version of the problem

function charCount(str) {
    // create an object that will contain the counts for each character
    let result = {}
    // loop over each character in the string
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase()
      // if the character is a number/letter AND is a key in the object, increment its value by 1
      if(result[char] > 0) {
          result[char]++
      }
      // if the character is a number/letter AND is not in the object, add it to object and set its value to 1 
      else {
          result[char] = 1
      }
      // if the character is not a number or letter (space, period, etc.), don't do anything
    }
    // return the object containing the counts
    return result
  }
  