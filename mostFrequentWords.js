function topThreeWords(text) {

    let newText = text.toLowerCase().replace(/\./g, "").replace(/\//g, "").replace(',', "").split("\n").join(" ").split(" ")

    let array = newText.filter(i => i != '').reduce((tally, letter) =>{
      tally[letter] = (tally[letter] || 0) +1;
      return tally;
    }, {})

    const entries = Object.entries(array)

    let sortedArr = entries.sort((a, b) => {
      return b[1] - a[1];
     })

     if(sortedArr.length == 0 || sortedArr[0][0] == '\'') return [];

     if (sortedArr.length == 1){
     return [sortedArr[0][0]]
     } else if (sortedArr.length == 2){
     return [sortedArr[0][0], sortedArr[1][0]]
     } else {
     return [sortedArr[0][0], sortedArr[1][0], sortedArr[2][0]]
     }
}
