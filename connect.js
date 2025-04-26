
const smash = (words) => words.join(' ').trim();
  
console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
console.log(smash(["hello"]), "hello");
console.log(smash([]), "")






