// Multiple Pointers Pattern

// Creating pointers that correspond to an index or position and move toward 
// the beginning, middle, or end based on a certain condition

// Problem: Write a function called sumZero which accepts a sorted array of integers. 
// The funtion should return the first pair that sums to 0. Return an array
// that contains two values that sum to 0 or undefined if they do not exist.

// Time complexity - O(N)
// Space complexity - O(1)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}