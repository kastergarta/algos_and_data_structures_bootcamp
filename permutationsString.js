function permutations(string) {

    let arr = string.split(''), results = [[arr.shift()]] 
    
        while (arr.length) {
            const letter = arr.shift()
            let collector = []
            results.map(el => {
                let idx = 0
                while (idx <= el.length) {
                  const a = [...el]
                  a.splice(idx, 0, letter)
                  collector.push(a)
                  idx++
                }
            })
            results = collector
        }
    
    return [... new Set(results.map(i => i.join('')))]
    
    }

    // const getPermutations = arr => {

    //     const output = [];
      
    //     const swapInPlace = (arrToSwap, indexA, indexB) => {
    //       const temp = arrToSwap[indexA];
    //       arrToSwap[indexA] = arrToSwap[indexB];
    //       arrToSwap[indexB] = temp;
    //     };
      
    //     const generate = (n, heapArr) => {
    //       if (n === 1) {
    //         output.push(heapArr.slice());
    //         return;
    //       }
      
    //       generate(n - 1, heapArr);
      
    //       for (let i = 0; i < n - 1; i++) {
    //         if (n % 2 === 0) {
    //           swapInPlace(heapArr, i, n - 1);
    //         } else {
    //           swapInPlace(heapArr, 0, n - 1);
    //         }
      
    //         generate(n - 1, heapArr);
    //       }
    //     };
      
    //     generate(arr.length, arr.slice());
      
    //     return output;
    //   };