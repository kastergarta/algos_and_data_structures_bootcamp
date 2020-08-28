function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["e","a","i","o","u"];
    var arr = str.split('');
    
    for (i=0; i<arr.length; i++){
      if (vowels.includes(arr[i])){
        vowelsCount++
      }
    };
    return vowelsCount;
  }