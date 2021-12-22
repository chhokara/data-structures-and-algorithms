// Binary Heaps
// In a MaxBinaryHeap, parent nodes are always larger than child nodes
// In a MinBinaryHeap, parent nodes are always smaller than child nodes

// Max Binary Heap
// Each parent has at most two child nodes
// Value of parent node is always greater than its child nodes 
// There are no guarantees between sibling nodes 
// A binary heap is as compact as possible. Children are as full as they can be and
// left children are filled out first

// Storing heaps 
// The nodes in a binary heap are stored in a list/array
// For any index of an array n...
// Left child is stored at 2n+1 and right child is stored at 2n+2
// Parent is at index (n-1)/2 floored