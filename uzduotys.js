// Parašyti funkciją, kurios pagaba su kompiuteriu būtų galima sužaisti žaidimą "Akmuo, Popierius, Šulinys"


function zaidziame(n) {
    let burtas = Math.floor((Math.random()*3));
    switch(burtas) {
        case 0:
            burtas = 'akmuo';
            break;
        case 1:
            burtas = 'popierius';
            break;
        case 2:
            burtas = 'sulinys';
            break;
    }
      
    if (n === burtas){
        return `Nugalėtojas nepaaiškėjo, meskite burtus dar kartą 🙄`;
    } 
    if (n === 'akmuo' || burtas === 'popierius'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`; 
    }
    if (n === 'popierius' || burtas === 'žirklės'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`;
    }
    if (n === 'žirklės' || burtas === 'akmuo'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`;
    }

}

console.log(zaidziame())
const n = 'šulinys'



//console.log()
//console.log(Math.floor((Math.random()*3)))
    
/*
function zmoniuKiekis(a, b) {
    let a1 = info[1];
    let b2 = info[2];
}
*/