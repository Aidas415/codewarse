function reverseList(list) {
    const numbers = list;
    let newArray = 0;
    for (let i = numbers.length-1; i >= 0; i--){
      newArray = newArray.push(numbers[i]); 
    }
    return newArray;
  }




console.log(reverseList([1,2,3,4]), [4,3,2,1]);
console.log(reverseList([3,1,5,4]), [4,5,1,3]);








