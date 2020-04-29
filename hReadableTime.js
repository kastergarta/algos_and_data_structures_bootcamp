function formatDuration (seconds) {

  let minutes = 0, hours = 0, days = 0, years = 0; 

  if (seconds === 0) return "now";
  if (seconds === 1) return "1 second";
  if (seconds < 60) return seconds + " seconds";
  
  if (seconds >= 60){
    minutes = (seconds - seconds % 60) / 60;
    seconds  = seconds - (minutes * 60); 
  } 
  
  if (minutes >= 60){
    hours = (minutes - minutes % 60) / 60;
    minutes = minutes - (hours * 60); 
  }
  
  if (hours >= 24){
    days = (hours - hours % 24) / 24; 
    hours = hours - (days * 24); 
  }
  
  if (days > 365){
    years = (days - days % 365) / 365;
    days = days - (years * 365); 
  }
  
  var arr = [];   
  var names = ["years", "days", "hours", "minutes", "seconds"]; 
  var unitNums = [years, days, hours, minutes, seconds]; 
  
  for (var i in unitNums){
    if (unitNums[i] !== 0){
      if (unitNums[i] === 1){ 
        arr.push(unitNums[i] + " " + names[i].slice(0, -1) + ", ");
      } else {
        arr.push(unitNums[i] + " " + names[i] + ", "); 
      }
      
    }
    
  }
  
  if (arr.length === 1) return arr[0].slice(0, -2);
  
  var last = arr[arr.length - 1];
  var middle = arr[arr.length - 2];
  var newLast = " and " + last.slice(0, -2); 
  var newMiddle = middle.slice(0, -2); 
  arr.splice(arr.length - 2, 2, newMiddle, newLast); 
  
  return arr.join('');

}