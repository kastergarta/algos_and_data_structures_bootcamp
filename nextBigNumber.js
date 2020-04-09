function nextBigger(n){
  var d = n.toString().split('');

  let pivot = -1;
  for (i=d.length-1; i>0; i--) {
    if (d[i] > d[i-1]) {
      pivot = i-1;
      break;
    }
  }
  if (pivot == -1) return pivot;
  let right = d.splice(pivot);

  let pivotDigit = right.splice(0, 1)[0];

  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pivotDigit) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  console.log(right)

  //let nextBig = right.sort((a, b) => a - b).filter(x => x > pivotDigit)[0];
  //console.log(pivotDigit, nextBig)

  console.log(mm)
  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pivotDigit);
  right = right.sort();

  let result = +d.concat([mm]).concat(right).join('');
  if (result < n) return -1;

  return result;
}
