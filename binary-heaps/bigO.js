// Binary Heap Time Complexity

// Insertion - O(log n)
// Removal - O(log n)
// Search - O(n)

// for a binary heap with n nodes, the amount of comparisons needed during insertion or removal are 
// O(log n). This is also the worst case because a binary heap can never be unbalanced with all nodes
// on one side.

// RECAP
// Binary heaps are useful for implementing other data structures like priority queues
// They are either MaxBinaryHeaps or MinBinaryHeaps with parents either larger or smaller than children
// Using math, we can represent heaps using arrays