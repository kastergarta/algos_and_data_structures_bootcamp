function sumFracts(l) {

    if (l.length === 0) return null;

    let down = [], up = [];
    for (i=0; i<l.length; i++){
      down.push(l[i][1]);
      up.push(l[i][0]);
    }

    function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let down2 = down[0];

    for (let j=1; j<down.length; j++){
       down2 = lcm(down2, down[j]);
    }

    let newUp = l.map(x => x[0]*down2/x[1]);
    let sumNewUp = newUp.reduce((a, b) => a+b);

    //console.log(down2 ,newUp, sumNewUp);

    if (sumNewUp%down2 == 0) {
        return sumNewUp/down2
        } else {
        if(sumNewUp%4 == 0 && down2%4 == 0){
          return [sumNewUp/4, down2/4]
        } else if (sumNewUp%3 == 0 && down2%3 == 0){
          return [sumNewUp/3, down2/3]
        } else if (sumNewUp%5 == 0 && down2%5 == 0){
          return [sumNewUp/5, down2/5]
        } else if (sumNewUp%2 == 0 && down2%2 == 0){
          return [sumNewUp/2, down2/2]
        } else {
          return [sumNewUp, down2]
        }
      }
}
