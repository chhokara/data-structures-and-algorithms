// Memoization
// Storing the results of expensive function calls and returning the cached result 
// when the same inputs occur again

// Memo-ized solution to fib
function fib(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    let res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res
    return res
}

// Time complexity
// The cost of retrieving values from our memo is roughly constant time (O(N)) because
// they are stored by their index. We only have to calculate each fibonacci value once 
// as it will be stored in our memo for the next retreival. This leads to a time complexity 
// of roughly O(N)