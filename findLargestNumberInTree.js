//https://leetcode.com/problems/find-largest-value-in-each-tree-row/

var largestValues = function(root) {
    let maxn = [];
  
    let getMax = (a, b = -Number.MAX_VALUE) => Math.max(a, b);
  
    let dfs = (node, step) => {
      if (!node) return;
      maxn[step] = getMax(node.val, maxn[step]);
      dfs(node.left, step + 1);
      dfs(node.right, step + 1);
    };
  
    dfs(root, 0);
    return maxn;
  };