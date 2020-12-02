let trailingZeroes = function(n) {
    let numberOfFives = 0;
    
    while (n >= 5) {
        numberOfFives += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    
    return numberOfFives;
};