function findDifferent(str1, str2){
    console.log(str1, 5, str2)
    let counter = 0;
    let diff= "";
    str2.split('').forEach(function(val, i){
      if (val != str1.charAt(i))
      {
        diff += val;  
        console.log(counter);
        counter++;
        }
    });
    console.log(diff,str2.length - counter)
  
  }