function toCamelCase(str){
    console.log(str)
    
    let arr = str.split('');
    
    for (i=0; i<arr.length; i++){
      if(arr[i] == '-' || arr[i] == '_'){
        arr.splice(i, 1);
        arr.splice(i, 1, arr[i].toUpperCase())
      }
    }
     return arr.join('')
     
    }