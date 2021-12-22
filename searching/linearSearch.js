function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1
}

// Time Complexity
// O(1) - Best case (first element is the one we want)
// O(n) - Average case (time increases as the length of array increases)
// O(n) - Worst case (we may have to traverse to the end of the array)