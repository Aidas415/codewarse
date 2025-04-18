function problem(x){
    if (x !== typeof number) {
      return Error
    }
    return 50 * x + 6
  }
  
  console.log(problem("hello"), "Error");
  console.log(problem(1), 56);
  console.log(problem(5), 256);
  console.log(problem(0), 6);
  console.log(problem(1.2), 66);
  console.log(problem(3), 156);
  console.log(problem("RyanIsCool"), "Error");
  console.log(problem(-3), -144);
  console.log(problem(""), "Error");
  console.log(problem(0.03), 7.5);

/////////////


console.log('---------');

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}

console.log(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');

///////////////////

const solve = (x, y) => x // y

console.log(solve(2, 1), 2);
console.log(solve(2, 4), 0.5);
console.log(solve(42, 0), Infinity);
console.log(solve(0, 8), 0);
console.log(solve(7, 2), 3.5);
console.log(solve(4.2, 1), 4.2);
console.log(solve(9999, 11), 909);



