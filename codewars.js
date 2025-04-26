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


/*
// grąžinti tekstą be balsių. Raidė "y" nėra skaitoma balsiu.
function disemvowel(str) {

  return str;
}

console.log(disemvowel('respublika'), 'rspblk');
console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
*/




function feast(beast, dish) {
  return beast.at(0) == dish.at(0) && beast.at(-1) == dish.at(-1)
  }

  function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
  }

  function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
  }


















