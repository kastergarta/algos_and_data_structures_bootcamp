function sumIntervals(intervals){
    //   console.log(intervals)
    //   if (intervals.length == 1) return intervals[0][1] - intervals[0][0];
      
    //   for (i=0; i<intervals.length; i++){
    //     for (j=0; j<intervals[0].length; j++){
        
    //       console.log(intervals[i+1], intervals[i][j])
          
    //       if(intervals[i+1].includes(intervals[i][j])){
    //       intervals.push(intervals[i].concat(intervals[i+1]));
    //       return intervals
    //       }
    //     }
    //   }
    console.log(intervals)
    intervals.sort((a, b) => {
        console.log(a[0], b[0])
        if (a[0] !== b[0]) return a[0] > b[0];
        return a[1] > b[1];
      });
    
    console.log(intervals)
    
      var ans = 0;
    
      var start = intervals[0][0]
        , end = intervals[0][1];
    
      for (var i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i][0] <= end) {
          end = Math.max(end, intervals[i][1]);
        } else {
          ans += end - start;
          start = intervals[i][0];
          end = intervals[i][1];
        }
      }
    
      ans += end - start;
      return ans;
    }