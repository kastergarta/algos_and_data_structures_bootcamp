var countAndSay = function(n) {
    
    let result = '1';
    if (n == 1) return result;
    
    let counterPointer = 0;
    let characterPointer = 0;
    let currentString = '';
    
    while (n > 1){
     while (counterPointer < result.length){
                while(result.charAt(counterPointer) === result.charAt(characterPointer)) {
                   counterPointer++ 
                }  
         
                currentString = currentString + (counterPointer - characterPointer).toString();
                currentString = currentString + result.charAt(characterPointer);
                characterPointer = counterPointer;
            }
        
            result = currentString;
            counterPointer = 0;
            characterPointer = 0;
            currentString = '';
            n--;
    }
    return result
};