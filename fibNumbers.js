function productFib(prod){
  const series = [1, 1];

  for (i=2; i<200; i++) {

    series.push(series[i - 1] + series[i - 2]);
    if (series[i-1]*series[i-2] == prod){
      return [series[i-2], series[i-1], true]
    } else if (series[i-1]*series[i-2] > prod){
      return [series[i-2], series[i-1], false]
    }
  };

}
