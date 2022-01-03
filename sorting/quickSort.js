function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

// pivot([4,8,2,1,5,7,6,3])
console.log(quickSort([4,8,2,1,5,7,6,3]))

// Time complexity
// best case - O(n log n)
// average case - O(n log n)
// worst case - O(n^2)

// If array is sorted, then quicksort requires O(n) decompositions and
// O(n) comparisions per decomposition. This leads to a O(n^2) time complexity