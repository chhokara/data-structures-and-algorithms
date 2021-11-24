var maxSubArray = function(nums) {
    
    let maxSumHere = nums[0];
    let maxSumSoFar = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        maxSumHere = Math.max(maxSumHere + nums[i], nums[i]);
        maxSumSoFar = Math.max(maxSumSoFar, maxSumHere);
    }
    return maxSumSoFar;
};