// Multiple pointers problem
function averagePairs(arr, avg) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let val = (arr[start] + arr[end]) / 2;
        if(val === avg) {
            return true;
        } else if(val < avg) {
            start++;
        } else if(val > avg) {
            end--;
        }
    }
    return false;
}