var hasCycle = function(head) {
    if (head === null) {
        return false;
    }

    var node1 = head;
    var node2 = head;
    node2 = node2.next;
    
    while(node1 !== null && node2 !== null) {
        if (node1.val === node2.val) {
            return true;
        }

        node1 = node1.next;
        node2 = node2.next;
        
        if (node2 !== null) {
            node2 = node2.next;
        } 
    }
    return false;
};