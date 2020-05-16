const Calculator = function() {
    this.evaluate = string => {
    
      let arr = string.split(' ').filter(i => i != ' ')
  
      for (i=0; i<arr.length; i++){
        if(arr[i] == '*'){
          let x = arr.splice(i-1, 3);
          arr.splice(i-1, 0, Number(x[0]) * Number(x[2]));
          i = 0;
        } else if (arr[i] == '/') {
          let x = arr.splice(i-1, 3);
          arr.splice(i-1, 0, Number(x[0]) / Number(x[2]));
          i = 0;
        } else {
          continue
        }
      }
  
      if (arr.length == 1) { return arr[0] }
      
      for (i=0; i<arr.length; i++){
        if(arr[i] == '-'){
        let x = arr.splice(i-1, 3);
        arr.splice(i-1, 0, Number(x[0]) - Number(x[2]));
        i = 0;
        } else if (arr[i] == '+') {
        let x = arr.splice(i-1, 3);
        arr.splice(i-1, 0, Number(x[0]) + Number(x[2]));
        i = 0; 
        } else {
        continue
        }
      }
       return arr[0];
      }
    };