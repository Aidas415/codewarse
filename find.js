// surasti žodžio poziciją (indeksą) sąraše

function findNeedle(haystack) {
    const w = 'needle';
    for (let i = 0; i < haystack.length; i++) {
      haystack[i] === w;
    }
    return `found the needle at position ${haystack.indexOf(w)}`;
  } 

let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1))   // found the needle at position 3
console.log(findNeedle(haystack_3))   // found the needle at position 30

// dar variantas
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

// dar variantas
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

