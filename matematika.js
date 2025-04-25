// teatre už nurodytos žiūrovo vietos bei nuo jo į kairę esančių vietų skaičius.

const seatsInTheater = (nCols, nRows, col, row) => (nRows - row) * (nCols - col + 1);

console.log(seatsInTheater(16,11,5,3) , 96)           // 96
console.log(seatsInTheater(1,1,1,1) , 0)              // 0
console.log(seatsInTheater(13,6,8,3) , 18)            // 18
console.log(seatsInTheater(60,100,60,1) , 99)         // 99
console.log(seatsInTheater(1000,1000,1000,1000) , 0)  // 0

// sukurti funkciją, kuri grąžina padaugintą reikšmę iš 50 ir dar pridėta 6. jeigu paduodamas ne skaičius, tada grąžina "Error"

function problem(x){
    const info = x;
    let result = 0;
    if (info === !number ) {
      return Error;
    }
    else {
      result = 50 * x + 6;
    }
    return result;
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






