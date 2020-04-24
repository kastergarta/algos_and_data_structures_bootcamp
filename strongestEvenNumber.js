function strongestEven(n, m){
    //   console.log(n, m)
    //   const max = m;    
    //   const min = n;   
    //   i = 0;  
      
    //   while (2**i <= max && i !== 52) {
    //   i++;    }    
      
    //   console.log('i: ', i); 
    
    //   for (j=i-1; j>=0; j--) {        
    //   let k = 1;       
    //   while(2**j*k <= max) {
    //   if (2**j*k >= min) {             
    //   return 2**j*k;            
    //   }            
    //  k+=2;        
    //  }    
    // }    
    // return false;
    
    //------
    
    //     GREAT RECURSION SOLUTION
    //     if (m - n < 1) return n;
    //     if (m - n < 2) return n + (n % 2);
        
    //     return 2 * strongestEven((n + (n % 2)) / 2, (m - (m % 2)) / 2);
    
    //------
    
        // 12, 19
        let curr = n;
        for(i=1; curr+i <= m; i=i*2)
          if((curr + i) % (i * 2) === 0){
          curr += i;
          }
        return curr;
        
    //   function strength(num){
    //   let count = 0;
    //   if (num === 0) {return 0;}
      
    //   while (num % 2 == 0) {
    //     num = num / 2;
    //     count++;
    //   }
    //   return count;
    // };
    
    //   let result = n;
      
    //    for (i=n; i<=m; i++) {
    //     if (strength(i) > strength(result)) {
    //       result = i;
    //     }
    //   }
    //   return result;
      
    }