// 1) Parašyti funkciją, kurios pagaba su kompiuteriu būtų galima sužaisti žaidimą "Akmuo, Popierius, Šulinys"


function zaidziame(n) {
    let burtas = Math.floor(Math.random()*3);
    switch(burtas) {
        case 0:
            burtas = 'akmuo';
            break;
        case 1:
            burtas = 'popierius';
            break;
        case 2:
            burtas = 'žirklės';
            break;
    }
      
    if (n === burtas){
        return `Nugalėtojas nepaaiškėjo, meskite burtus dar kartą 🙄`;
    } 
    if (n === 'akmuo' && burtas === 'popierius'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`; 
    }
    if (n === 'popierius' && burtas === 'žirklės'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`;
    }
    if (n === 'žirklės' && burtas === 'akmuo'){
        return `Šį kartą nugalėjo kompiuteris. Nenusiminkite, pasiseks kitą kartą. 😉`;
    } else {
        return `Sveikinu, jūs laimėjote prieš kompiuterį 😀👏🎇`;
    }

}


const n = 'žirklės';
//const n = 'akmuo';
console.log(zaidziame(n))


    
// UZD.2) kiek žmonių reikės, norint pakelti tam tikro svorio krovinį

function zmoniuKiekis(a, b) {
    let Svoris = a;
    let x = b;
    return Math.ceil(a / b);
}

// UZD.3a) Kiek pastato aukštis maksimaliai gal talpinti aukštų kiekį, jeigu kiekvienas aukštas gali būti 2 arba 2.5 metrų aukščio. Namo aukštis paduodamas tik sveiku skaičiumi.

function aukstuKiekis(metrai) {
    let a = 2;
    let b = 2.5;
    if (metrai % 2 === 0){
        return `Pastatas talpins ${metrai / 2} aukštų po 2 metrus aukščio.`;
    } else {
        return `Pastatas talpins ${metrai / 2 -2} auk6tus po 2 metrus aukščio ir 2 aukštus po 2.5 metro aukščio.`;
    }
}

// UZD.3b) Kiek namo sienoms reikės plytų, nurodžius namo išmatavimus (plotį, ilgį, aukštį). Plytos aukštis - 0.1 m, o plotis 0.2 m.

let plytAukstis = 0.1;
let plytPlotis = 0.2;
let kiekis;
function plytuKiekis(plotis, ilgis, aukstis) {
    kiekis = (aukstis / plytAukstis) * (((plotis + ilgis) * 2) / plytPlotis);
    return kiekis;
}
console.log(plytuKiekis(2, 1, 2))

// UZD.3b) Kiekviename aukšte yra 6 langai, 1 durys bei x kiekis plytų. Nurodžius namo plotį, ilgį ir aukštį, bei pateikus durų, langų ir plytų kainą, apskaičiuoti viso namo kainą. 

function namoKaina(plotis, ilgis, aukstis, plytuKaina, languKaina, duruKaina){
    let sienuKaina;
    let languKiekis;
    let duruKiekis;
    sienuKaina = (aukstis / plytAukstis) * (((plotis + ilgis) * 2) / plytPlotis) * plytuKaina;
    languKiekis = Math.floor(aukstis / 2) * 6;
    duruKiekis = Math.floor(aukstis / 2)
    return languKaina * languKiekis + duruKaina * duruKiekis + sienuKaina;
}

console.log(namoKaina(8, 13, 7, 0.3, 245, 170));

//console.log(kainaSienu)

// UZD.4) Kalėdų senelis visus sveikina su gimtadieniu. Kam sukako 1, 5, 10, 15, 16, 18, 20 ir kiti jubiliejiniai metai, gana nuostabias dovanas (vienaragis, pilis, mašina, laivas, lėktuvas, kelionė į kosmosą), o kiti nelabai kokias dovanas (kojinės, ananasas, skaityta knyga, pieštukas, kempinė, žibintuvėlis)

function gimtadienioDovana(metai){
    let luxGift = ['Vienaragis', 'Pilis', 'Mašina', 'Laivas', 'Kelione i kosmosa', 'Lėktuvas', 'Sala'];
    let simplGift = ['Kojinės', 'Ananasas', 'Skaityta knyga', 'Pieštukas', 'kempinė', 'Žibintuvėlis', 'Kamuolys']
    if (metai % 5 === 0 || metai === 1 || metai === 16 || metai === 18) {
        luxGift = Math.floor(Math.random() * 7);
        switch(luxGift){  
            case 0:
                luxGift = 'Vienaragis';
                break;
            case 1:
                luxGift = 'Pilis';
                break;
            case 2:
                luxGift = 'Mašina';
                break;
            case 3:
                luxGift = 'Laivas';
                break;
            case 4:
                luxGift = 'Kelionė į kosmosą';
                break;
            case 5:
                luxGift = 'Lėktuvas';
                break;
            case 6:
                luxGift = 'Sala';
                break;
            result = luxGift;
        }
        return luxGift;
            
    } else {
   
     
        simplGift = Math.floor(Math.random() * 7);
        switch(simplGift){
            case 0:
                simplGift = 'Kojinės';
                break;
            case 1:
                simplGift = 'Ananasas';
                break;
            case 2:
                simplGift = 'Skaityta knyga';
                break;
            case 3:
                simplGift = 'Pieštukas';
                break;
            case 4:
                simplGift = 'Kempinė';
                break;
            case 5:
                simplGift = 'Žibintuvėlis';
                break;
            case 6:
                simplGift = 'Kamuolys';
                break;
        }
        return simplGift;
    }
    
}

//console.log(gimtadienioDovana(1))
//console.log(gimtadienioDovana(15))
//console.log(gimtadienioDovana(16))
//console.log(gimtadienioDovana(33))
//console.log(gimtadienioDovana(18))
//console.log(gimtadienioDovana(25))
//console.log(gimtadienioDovana(44))
//console.log(gimtadienioDovana(50))
//console.log(gimtadienioDovana(51))
//console.log(gimtadienioDovana(100))



console.log(`I\n.I\n2.I\n3..I\n4...I\n5....I\n6.....I\n`)


console.log(`I\n I\n  I\n   I\n    I\n     I\n      I\n`)















