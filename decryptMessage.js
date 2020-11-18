function decrypt(word) {
    if (word == '') return '';
    let step3 = word.split('').map(el => el.charCodeAt(0));
    let step2 = [step3[0]];
    
    for (i=1; i < step3.length; i++){
      let current = 0;
      let m = 1;
      while(current < 97){
      current = step3[i] - step2[i-1] + 26m;
      m++;
      }
      step2.push(current);
    }
    //let stepTwoArr = [arrValues[0]];
    //for (i=1; i < arrValues.length; i++){
     // stepTwoArr.push(Math.round(stepTwoArr[i-1] / 26)*26 + arrValues[i]);
    //}  
    
    //let initialArr = [stepTwoArr[0]-1];
    //for (i=1; i < arrValues.length; i++){
     // initialArr.push(stepTwoArr[i]-stepTwoArr[i-1]);
    //}
    
    
    //console.log(initialArr);
    //console.log(stepTwoArr);
    console.log(step3);
    console.log(step2);
    
    return 