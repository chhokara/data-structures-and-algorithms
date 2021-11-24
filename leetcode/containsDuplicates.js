var containsDuplicate = function(nums) {
    // create an object that contains frequencies of each digit
    const lookup = {};
    // loop over the array of nums
    for(let i = 0; i < nums.length; i++) {
        let digit = nums[i];
        // if the current digit is in the object
        if(lookup[digit]) {
            // increment its count by 1
            lookup[digit]++;
        } else { // else initialize the value to 1
            lookup[digit] = 1;
        }
    }
    
    // loop over each key in the object
    for(let key in lookup) {
        // if any key has a value greater than one then return true
        if(lookup[key] > 1) {
            return true;
        }
    }
    // return false
    return false;
};