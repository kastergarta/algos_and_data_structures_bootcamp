// https://leetcode.com/problems/heaters/

var findRadius = function(houses, heaters) {

    houses.sort(function(a, b) {return a - b});
    heaters.sort(function(a, b) {return a - b});
  
    let A = houses.length
      , B = heaters.length
      , j = 0
      , ans = 0;
  
    for (let i = 0; i < A; i++) {
      let pos = houses[i]
        , minDis = Infinity;
  
      while (heaters[j] < pos && j < B - 1)
        j++;
  
      j > 0 && (minDis = Math.min(minDis, Math.abs(pos - heaters[j - 1])));
      minDis = Math.min(minDis, Math.abs(pos - heaters[j]));
  
      ans = Math.max(ans, minDis);
  
      j > 0 && j--;
    }
  
    return ans;
  };