
// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// MILLESTON 1 
// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// const numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "10", "9",];

// const menoNumeri = ["macchina", "casa", "ruota", "sasso",];

// if (numbers.length > menoNumeri.length) {
//     for (let i = menoNumeri.length; i < numbers.length; i++) {
//         const num = randomNumbers(1, 100);
//         menoNumeri.push(num);
//     }
//     console.log('vuol dire che dobbiamo aggiungere valori all array MENONUMERI, quanti?');
// }

// if (menoNumeri.length > numbers.length) {
//     for (let i = numbers.length; i < menoNumeri.length; i++) {
//         const num = randomNumbers(1, 100);
//         numbers.push(num);
//     }
//     console.log('vuol dire che dobbiamo aggiungere valori all array MENONUMERI, quanti?');
// }

///////////////
// let numbersIndex = 0;
// numbers.forEach((element, index)=>{
//     numbersIndex = index;
// });
// console.log(numbersIndex);

// let menoNumeriIdex = 0;
// menoNumeri.forEach((element, index)=>{
//     menoNumeriIdex = index;
// });
// console.log(menoNumeriIdex);

//  const differenrzaArray = (numbersIndex - menoNumeriIdex );
//  console.log(differenrzaArray);

// let i = 0;
// do{
//     menoNumeri.push(randomNumbers(1, 10));
//     i++
// }while (i < differenrzaArray);

// console.log(menoNumeri);

////////////
//////////Si ripete anche per me 
// function randomNumbers(min, max){
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// MILLESTON 2
// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

// const array = [];
// console.log(array)

// let laSomma = 0;

// do{
//     const askClient = parseInt(prompt(`Dimmi un numero`));
//     array.push(askClient);
//      laSomma += askClient;
// } while (laSomma <= 50);
//     console.log(array);
//     console.log(laSomma)


// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const squadre = [
    {
        nome:"Toro",
        puntiFatti:0,
        falliSubiti:0,
    },

    {
        nome:"Fiorentina",
        puntiFatti:0,
        falliSubiti:0,
    },

    {
        nome:"Sassuol0",
        puntiFatti:0,
        falliSubiti:0,
    },
];
console.log(squadre);

const newArray = squadre.map((element)=>{

    const container = {};
    container.nome = element.nome;
    container.puntiFatti = random(0,50);
    container.falliSubiti= random(0,50);
    return container;
});

console.log(newArray);



function random(min,max ){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




