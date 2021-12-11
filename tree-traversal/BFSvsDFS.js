// Both BFS and DFS have the same time complexity as they visit each node once

// For very wide trees, BFS will take up more space complexity because it has to store
// a lot of nodes in a queue. DFS does not have to keep track of that many nodes. It only has to look at 
// nodes in a given branch, going all the way down a tree which results in less space complexity

// For very deep trees, BFS will take up very little space complexity as it does not have to put as many
// nodes in a queue. DFS will take up more space complexity because as we go down the tree, we have to keep
// track of every level above the current level in memory

// DFS - in order
// Used commonly with BST's. We get all of the nodes in their underlying order 

// DFS - pre order
// Can be used to "export" a tree structure so that it is easily reconstructed or copied

// RECAP
// Trees are non-linear data structures that contain a root and child nodes
// Binary Trees can have values of any type, but at most two children for each parent
// In a BST, every node to the left of a parent is less than it's value and every node to the right is greater
// We can search through trees using BFS and DFS
