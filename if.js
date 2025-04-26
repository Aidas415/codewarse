function setAlarm(employed, vacation){
    if (employed === true && vacation === true){
        return false,'Should be false.';
    }
    if (employed === true && vacation === false){
        return true,'Should be true.';
    }
    if (employed === false && vacation === true){
        return false,'Should be false.';
    }
    if (employed === false && vacation === false){
        return false,'Shoulde be false.';
    }
};

console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");

// Kitaip
function setAlarm1(employed, vacation){
    if (employed==true && vacation== true ) { return false }
    if (employed==false && vacation== true ) { return false }
   if (employed==false && vacation== false) { return false }
   if (employed==true && vacation== false ) { return true }
};

console.log(setAlarm1(true, true),  false,"Should be false.");
console.log(setAlarm1(false,true),  false, "Should be false.");
console.log(setAlarm1(true, false), true,"Should be true.");

// Kitaip
function setAlarm2(employed, vacation){
    return employed === true && vacation === false ? true : false
};

console.log(setAlarm2(true, true),  false,"Should be false.");
console.log(setAlarm2(false,true),  false, "Should be false.")
console.log(setAlarm2(true, false), true,"Should be true."); 
  
  // Kitaip
  function setAlarm3(employed, vacation){
    return (employed && !vacation) ? true : false;
  };
  
console.log(setAlarm3(true, true),  false,"Should be false.");
console.log(setAlarm3(false,true),  false, "Should be false.")
console.log(setAlarm3(true, false), true,"Should be true."); 

