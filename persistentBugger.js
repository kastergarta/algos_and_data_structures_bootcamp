function persistence(num) {
    let i = 0;
      num = num.toString();
      while (num.length > 1) {
        i++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
      }
      return i;
    }