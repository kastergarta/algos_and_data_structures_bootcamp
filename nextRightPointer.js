var connect = function(root) {
    if(!root) {
        return;
    }
    
    // leftEnd is used to track the current left most node
    var leftEnd = root;
    
    while(leftEnd !== null) {
        var cur = leftEnd;
        // dummy is used to point to the next level's leftEnd
        var dummy = new TreeLinkNode(0);
        var pre = dummy;
        // for each level we use leftEnd and leftEnd next to achieve level traversal
        while(cur !== null) {
            if(cur.left !== null) {
                pre.next = cur.left;
                pre = cur.left;
            }
            
            if(cur.right !== null) {
                pre.next = cur.right;
                pre = cur.right;
            }
            
            cur = cur.next;
        }
        
        leftEnd = dummy.next;
    }
};