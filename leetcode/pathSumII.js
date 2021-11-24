var pathSum = function(root, targetSum) {
    const paths = [];
    findPaths(root, targetSum, [], paths);
    return paths;
};

var findPaths = function(root, targetSum, currentPath, paths) {
    if(root == null) return;
    
    currentPath.push(root.val);
    if(root.val == targetSum && root.left == null && root.right == null) {
        paths.push(currentPath);
        return;
    }
    
    findPaths(root.left, targetSum - root.val, [...currentPath], paths);
    findPaths(root.right, targetSum - root.val, [...currentPath], paths);

}