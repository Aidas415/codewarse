//function getAverage(marks){
//    let sum = 0;
//    for(let i = 0; i < marks.length; i++) {
//        sum = sum + marks[i];    
//    }
//    return Math.round(sum / marks.length);
//}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);

console.log('------------');

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }







