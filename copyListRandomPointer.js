var copyRandomList = function(head) {
    var hashMap = {};
    var newHead = new RandomListNode(0);
    newHead.next = copyList(head);
    
    function copyList(node)   {
      if(node === null) {
          return node;
      }
        
      if(hashMap[node.label]) {
          return hashMap[node.label];
      }
      
      var newNode = new RandomListNode(node.label);
      hashMap[node.label] = newNode;
      
      newNode.next = copyList(node.next);
      newNode.random = copyList(node.random);
      
      return newNode;
    }
    
    return newHead.next;
  };