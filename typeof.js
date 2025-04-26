function problem(x){
    let result = 0;
    if (typeof x === 'number'){
       result = 50 * x + 6;
    }else{
    result = 'Error';
    }
    return result;
  }  

  console.log(problem(1));
  console.log(problem(0));
  console.log(problem('labas'));
  // Kitaip

const problem1 = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

console.log(problem1(2));
console.log(problem1(10));
console.log(problem1('rytas'));
// Kitaip

const problem2 = x =>
    Number.isFinite(x) ? x * 50 + 6 : `Error`;

console.log(problem2(-1));
console.log(problem2(-10));
console.log(problem2(false));
// Kitaip

function problem3(x){
    if (typeof x === 'string' || x instanceof String)
      return "Error";
    else
      return x * 50 + 6;
  }

console.log(problem3(4));
console.log(problem3(Infinity));
console.log(problem3(false));

console.log('---------------');
