function spyOn (func) {
    let call  = [], rVal = [], count = 0;
        
    let spy = function() {
      call = [].concat.call(call, ...arguments);
      var val = func.apply(this, arguments);
      rVal.push(val);
      count+=1;
      return val;
    }
    
    spy.callCount = () => count;
    spy.wasCalledWith = n => call.indexOf(n) > -1;
    spy.returned = n => rVal.indexOf(n) > -1;
    
    return spy;
  }