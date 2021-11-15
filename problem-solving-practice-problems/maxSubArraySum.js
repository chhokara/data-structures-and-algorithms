// Sliding window problem

// Problem: Write a function that finds the maximum sum of a subarray with the length of the number
// passed to the function
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum;
}