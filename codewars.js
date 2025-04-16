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
/*
function contamination(text, char){ 
    let a = char;
    let newText = text.split('');
    if (newText[i] === '' || a === '') {
      return '';
    }
    else {
      return newText.join('').replaceAll(newText[i], a);
    }
  } 
  
  console.log(contamination("abc","z"), "zzz")
  console.log(contamination("","z"), "")
  console.log(contamination("abc",""), "")
  console.log(contamination("_3ebzgh4","&"), "&&&&&&&&")
  console.log(contamination("//case"," "), "      ")
*/  
///////////////

function position(letter){
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    return alph.indexOf(letter) + 1;
  }

console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");

////////////////////

function findNeedle(haystack) {
    let array = haystack;   
    let result = 0;  
    result = result + array.indexOf(needle) + 1;      
    return `found the needle at position ${result}`;  
}


let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
let haystack_4 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

console.log(findNeedle(haystack_1.slice()), undefined, "Your function didn't return anything");
console.log(findNeedle(haystack_1), 'found the needle at position 3');
console.log(findNeedle(haystack_2), 'found the needle at position 5');
console.log(findNeedle(haystack_3), 'found the needle at position 30');
console.log(findNeedle(haystack_4), 'found the needle at position 5');




















