let isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }
    
    let pointer1 = 0;
    let pointer2 = 0;
    
    while (pointer1 < s.length && pointer2 < t.length) {
        if (t.charAt(pointer2) === s.charAt(pointer1)) {
            pointer1++;
        }
        pointer2++;
    }
  
    return pointer1 === s.length;
};