// Big O of BST
// Insertion - O(log n)
// Searching - O(log n)
// ** Not guaranteed
// We may have a BST where every node is greater than the previous node in which case the 
// time complexity will be O(n)
// We can easily fix this by reassigning the root to a different node so that the BST is more balanced

// If we double the number of nodes in a BST, the number of steps to insert/find
// will only increase by 1

// 2x number of nodes: 1 extra step
// 4x number of nodes: 2 extra steps
// 8x number of nodes: 3 extra steps