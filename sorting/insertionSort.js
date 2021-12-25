function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var current = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertionSort([2,1,9,76,4]))

// Time complexity
// O(N^2) - Worst Case
// If data is almost all sorted, then it is roughly O(N)

// If we require numbers to be sumbitted in the array on the fly, 
// then this algorithm is optimal because it keeps one side of the 
// array sorted and builds on that 