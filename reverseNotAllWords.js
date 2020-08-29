function spinWords(string){

    let arr = string.split(' '), newArr =[ ];
    
  //   for (let i=0; i<arr.length; i++){
  //     if (arr[i].length < 5) {
  //       newArr.push(arr[i])
  //     } else {
  //       newArr.push(arr[i].split('').reverse().join(''))
  //     };
  //   };
  
    arr.map(i => (i.length < 5) ? newArr.push(i) : newArr.push(i.split('').reverse().join('')));
  
  //   for (let i=0; i<arr.length; i++){ 
    
  //       (arr[i].length < 5) ? newArr.push(arr[i]) : newArr.push(arr[i].split('').reverse().join(''))
      
  //   };
    
    return newArr.join(' ');
  }