function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.splice(0, mid))
    let right = mergeSort(arr.splice(mid))
    return merge(left, right)
}

// Time Complexity
// best case - O(n log n)
// average case - O(n log n)
// worst case - O(n log n)
// space - O(n)

// Why???
// Merge sort requires O(log n) decompositions and O(n) comparisons per decomposition