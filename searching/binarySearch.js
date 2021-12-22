function binarySearch(arr, val) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    while(left <= right) {
        if(val === arr[mid]) {
            return mid
        } else if(val < arr[mid]) {
            right = mid - 1
        } else if(val > arr[mid]) {
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2)
    }
    return -1
}