function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length - 1; i >= 0; i--){
        noSwaps = true
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

console.log(bubbleSort([1,2,3,4,5]))

// Time complexity 
// If data is nearly sorted, then bubble sort has a time complexity of O(N)
// The average time complexity is O(N^2)