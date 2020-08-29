function filter_list(l) {
    let arr = [];
    for (i=0; i<l.length; i++) {
      if (l[i] === parseInt(l[i], 10)) {
      arr.push(l[i]);
    };
    }
    return arr;
  }