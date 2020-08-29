function findEvenIndex(arr) {
  
    if ((arr.length == 1) || (arr.slice(1, arr.length).reduce((a, b) => a + b) == 0)){
      return 0
    } else if (arr.slice(0, arr.length-1).reduce((a, b) => a + b) == 0){
      return arr.length-1
    }
    
    for (let i=1; i<arr.length-1; i++){
    if (arr.slice(0,i).reduce((a, b) => a + b) == arr.slice(i+1, arr.length).reduce((a, b) => a + b)){
          return i
        };
      };
      return -1
   }