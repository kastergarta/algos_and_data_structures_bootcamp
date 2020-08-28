function capitalize(s,arr){
    return s.split('').map((v,i) => {
      return arr.includes(i) ? v.toUpperCase() : v;
    }).join('');
  };

capitalize('aakjdshfhjd', [1, 3, 7, 100])