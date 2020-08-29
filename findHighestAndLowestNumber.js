function highAndLow(numbers){

    let arr = numbers.split(' ');
    
    if (arr.length == 1) {
      return arr.join('') + ' ' + arr.join('');
      } else {
      let arr2 = arr.sort((a, b) => a - b);
      let arr3 = arr2.splice(0,1);
      let arr4 = arr2.splice(arr2.length-1,1);
      return arr4 + ' ' + arr3
      };
  }

  let numbers = '1 3 5 7 42 2 33';