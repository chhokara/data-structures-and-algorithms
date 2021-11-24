// Hash function that works on strings only
function hash(key, arrayLen) {
    let total = 0
    for(let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let val = char.charCodeAt(0) - 96
        // adding up all char codes and using mod to keep within array bounds
        total = (total + val) % arrayLen
    }
    return total
}

// Problems with our current hash
// 1. Only hashes strings (we won't worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random (less clustered)

function hash2(key, arrayLen) {
    let total = 0
    let WEIRD_PRIME = 31
    // by adding a bound of 100 we are making this algorithm more performant (O(N)-like time complexity)
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        // by multiplying prime number and modding by prime arrayLen, we are reducing the amount of collisions
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
}




