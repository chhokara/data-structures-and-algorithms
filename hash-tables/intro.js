// What is a hash table?
// Hash tables are used to store key-value pairs.
// They are like arrays, but the keys are not ordered.
// Unlike arrays, hash tables are fast for all of the following
// operations: finding values, adding new values, removing values

// Introductory Example
// How can we get human-readability and computer readability?
// Computers don't know how to find an element at index pink! 

// The hash part
// To implement a hash table, we'll be using an array.
// In order to look up values by key, we need a way to convert
// keys into valid array indices.
// A function that performs this task is called a hash function.

// What makes a good hash?
// 1. Fast (i.e. constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields same output)