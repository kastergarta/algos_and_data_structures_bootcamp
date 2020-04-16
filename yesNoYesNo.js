function yesNo(arr){
    let result = [], swap = true;
  
    while(arr.length){
      let newArr = [];
      for(let i=0; i<arr.length; i++){
        if(swap) result.push(arr[i]);
        else newArr.push(arr[i]);
        swap = !swap;
      }
      arr = newArr;
    }
  
    return result;
  }
  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  1,3,5,7,9,2,4,6,8,10
  1,3,5,7,9,2,6,10,4,8
  1,3,5,7,9,2,6,10,8,4
  
  // var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // var filtered = array.filter(function(value, index, arr){ 
  // return value > 5;
  // });
  //filtered => [6, 7, 8, 9]//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  
  // var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
  // for( var i = 0; i < arr.length; i++){
  //  if ( arr[i] === 5) { 
  //   arr.splice(i, 1);
  //   i--;
  //   }
  //  }
  //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]