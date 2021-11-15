// Sliding window problem

// Problem: Write a function which returns the minimum length of a contiguous subarray of which the sum is 
// greater than or equal to the integer passed to the function
function minSubArrayLen(arr, sum) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;

    while(start < arr.length) {
        if(total < sum && end < arr.length) {
            total += arr[end];
            end++;
        } else if(total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}