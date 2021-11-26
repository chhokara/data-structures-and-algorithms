// The fibonacci sequence
// Time complexity: O(2^n) (very bad)
// The problem with this solution is that it is repeating subproblems (fibonacci calculations) 
// which is causing time complexity to increase very quickly. 
function fib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2)
}