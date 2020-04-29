function sumIntervals(intervals){

  function bubbleSort(arr){
    var noSwaps;
    for(i = arr.length; i>0; i--){
      noSwaps = true;
      for(j = 0; j<i-1; j++){
        if(arr[j][0] > arr[j+1][0]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }

  bubbleSort(intervals);

  let sum = 0, start = intervals[0][0], end = intervals[0][1]; 

  for (i=1; i<intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      sum += end-start;
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  sum += end-start;
  return sum;
}