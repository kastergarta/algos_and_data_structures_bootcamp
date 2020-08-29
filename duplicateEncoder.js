function duplicateEncode(word){

    let data = word.toLowerCase().split(''), 
    arr = [],
    result = [];
    
    data.forEach(function(element, index) {
      if (data.indexOf(element, index + 1) > -1) {
      
      if (arr.indexOf(element) === -1) {
        arr.push(element);
      }
     }
    });
  
  for (i=0; i<data.length; i++){
    if (arr.includes(data[i])) {
      result.push(')');    
    } else {
      result.push('(')
    };
  };
  
  return result.join('');
}