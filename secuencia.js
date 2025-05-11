const prompt = require('prompt-sync')();
function fibonacciSingleBranch(n, current = 0, next = 1, result = []) {
    if (result.length === n) return result;
    result.push(current);
    return fibonacciSingleBranch(n, next, current + next, result);
  }
  
  
  const numero = 10;
  const secuencia = fibonacciSingleBranch(numero);
  console.log(secuencia); // [0, 1, 1, 2, 3, 5, 8]