function rgb(r, g, b){
    function convert(num){
      if(num < 0 ) {
      return "00"
      }
      if(num > 255 ) {
      return "FF"
      }
      return  ("0"+(Number(num).toString(16))).slice(-2).toUpperCase() 
    }
  
    return convert(r)+convert(g)+convert(b);
  }