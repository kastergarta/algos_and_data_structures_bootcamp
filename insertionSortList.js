var insertionSortList = function(head) {
    var ans = [];
    while (head) {
      ans.push(new ListNode(head.val));
      head = head.next;
    }
  
    ans.sort(function(a, b) {
      return a.val - b.val;
    });
  
    if (!ans.length) return null;
    for (var i = 0, len = ans.length; i < len - 1; i++)
      ans[i].next = ans[i + 1];
  
    return ans[0];
  };