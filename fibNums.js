//RECURSIVE SOLUTION

function fib(n){
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

//console.log(fib(40));

// MEMO SOLUTION

function fibMemo(n, memo = []){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  let result = fibMemo(n-1, memo) + fib(n-2, memo);
  memo[n] = result;
  return result;    
}

console.log(fibMemo(5));

// TABULATED VERSION

function fibTabulation(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for(i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]; 
    }    
    return fibNums[n];
}

fibTabulation(5)