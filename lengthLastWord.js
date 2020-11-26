let lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    let beforeFirstNonEmptyChar = true;
  
    if (s.length === 0) {
      return lastWordLength;
    }
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s.charAt(i) !== ' ') {
        lastWordLength++;
        beforeFirstNonEmptyChar = false;
      } else if (!beforeFirstNonEmptyChar) {
        break;   
      }
    }
  
    return lastWordLength;
  };