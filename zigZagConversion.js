function(s, numRows) {
    if(s === null || s.length === 0 || numRows <= 0) {
      return "";
    }
    
    if(numRows === 1) {
      return s;
    }
    
    var res = '';
    var size = 2 * numRows - 2;
    
    for(var i = 0; i < numRows; i++) {
      for(var j = i; j < s.length; j += size) {
        res += s[j];
        
        if(i !== 0 && i !== numRows - 1) { // except first and last row
          var tmp = j + size - 2 * i;
          if(tmp < s.length) {
            res += s[tmp];
          }
        }
      }
    }
    
    return res;
  };