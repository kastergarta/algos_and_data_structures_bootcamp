var pathSum = function(root, sum) {
    if (!root)
      return 0;
  
    let ans = 0;
    let s = new Set();
  
    dfs(root, root.val);
  
    function dfs(node, tmp) {
      if (tmp === sum)
        ans++;
  
      if (node.left) {
        dfs(node.left, tmp + node.left.val);
  
        if (!s.has(node.left)) {
          s.add(node.left);
          dfs(node.left, node.left.val);
        }
      }
  
      if (node.right) {
        dfs(node.right, tmp + node.right.val);
  
        if (!s.has(node.right)) {
          s.add(node.right);
          dfs(node.right, node.right.val);
        }
      }
    }
  
    return ans;
  };