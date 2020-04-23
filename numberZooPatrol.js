function findNumber(array) {
    let sortedArray = array.sort((a, b) => a-b);
      if (sortedArray[0] !== 1){
        return 1;
      }
      
      for (i=0; i <sortedArray.length; i++){
        if (sortedArray[i+1] - sortedArray[i] !== 1){
          return sortedArray[i]+1;
        }
      }
    // return array.filter(x => array.includes(x) === true)
    }

    findNumber([1,3,4,5,6,7,8]);

    function findNumber(array) {
   
      let min = Math.min(...array), max = Math.max(...array);
      
      if(array.length == 0 || min != 1) return 1;
      
      let sum = array.reduce((a, b) => a+b)
      let tSum = max*(max+1)/2
      
      if(tSum-sum == 0) return max+1;       
      return tSum-sum
      }