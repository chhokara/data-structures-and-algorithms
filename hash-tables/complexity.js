// BIG O of Hash Tables (average case)
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)
// Searching for a key: O(1)
// Searching for a value: O(N) b/c we have to search every item in hash table

// With a good hash function, we can expect the key-value pairs to be distributed evenly which would require only a few operations
// to retrieve a value given the key (O(1) time).
// For example if we are accessing a value at the last index of the hash table which contains only 2 key-value pairs, then we first need
// to hash our key to get the index which is one operation, and then we need to look through the key-value pairs at this index which will be 
// at most 2 more operations. In total this is just 3 operations or simply O(1) time complexity.

// Recap
// 1. Hash tables are collections of key-value pairs
// 2. Hash tables can find values quickly given a key
// 3. Hash tables can add new key-values quickly
// 4. Hash tables store data in a large array, and work by hashing the keys
// 5. A good hash function should be fast, distribute keys uniformly, and be deterministic
// 6. Separate chaining and linear probing are two strategies used to deal with two keys that
// hash to the same index