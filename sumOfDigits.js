function digitalRoot(n) {
   
    if ( n < 10) return n;
    
    let arr = n.toString().split('');
  
    while (arr.length > 1) { 
      let sum = 0; 
      for (let i = 0; i < arr.length; i++) {
        let el = Number(arr[i]);
        sum += el;
      }
      arr = sum.toString().split('')
    }
    return Number(arr[0]);
   }