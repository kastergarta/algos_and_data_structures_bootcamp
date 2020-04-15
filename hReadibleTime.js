function humanReadable(seconds) {
    let time = ['00', '00', '00'];
    let mins = seconds / 60 
    
    if (seconds < 60){
      
      time[2] = seconds.toString()
  
    } else if (seconds < 3600){
    
      let min = Math.floor(seconds/60);
      let sec = seconds - min*60;
      time[1] = min.toString();
      time[2] = sec.toString();
      
    } else {
    
      let pureHours = Math.floor(seconds/3600)
      let pureMins = Math.floor(seconds/60) - pureHours*60
      let pureSeconds = seconds - pureHours*3600 - pureMins*60
      time[0] = pureHours.toString()
      time[1] = pureMins.toString()
      time[2] = pureSeconds.toString()
      
    }
    
    for (i=0; i<time.length; i++){
      if (time[i].length == 2){
         continue
      } else {
         time[i] = '0' + time[i] 
      }
    }
    
    return time.join(':');
    
  }