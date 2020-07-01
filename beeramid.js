var beeramid = function(bonus, price) {
    let beers = ~~(bonus / price), num = 0;
    while(beers >= num * num)
      beers -= num * num++;
    return num > 0 ? num - 1 : 0;
  }