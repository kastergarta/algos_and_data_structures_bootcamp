function  naiveSearch (long, short) {
    let count = 0;
    for (i = 0; i < long.length; i++){
         for (j = 0; j < short.length; j++) {
            if (short[j] !== long[i +j]) {
                console.log("BREAK!");
                break;
            }
            if (j === short.length - 1) {
                console.log("FOUND ONE!");
                count++;
            }
         }
    }
    return count;
}

naiveSearch("sdf34f34g4gtgt", "34");
