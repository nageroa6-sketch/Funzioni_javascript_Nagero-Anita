//Confronti la stringa con la sua versione reverse



//stringa; rimuovo spazi o segni di punteggiatura.

//SONO UGUALI?? = true ; altrimenti = false




// Selfwork Funzioni 4 = TRACCIA


// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


function isPalindroma(str) {

let strPulita = str.replace(/\W/g, "").toLowerCase();


//creo, inversione str
let invertita= "";
for ( let i = strPulita.length -1; i >= 0; i--) {
    invertita = invertita + strPulita[i];
}
//pongo confronto a resa di pulizia stringa e codice - funzione - scrittura e lettura; per valore boolean
if (strPulita === invertita) {
    return true;
}else {
    return false;
}

}



//ORA LE MIE FRASI DI CONSOLE.

let input= "i topi non avevano nipoti";

console.log(input);

//

console.log(isPalindroma(input));



   
// stringa1 = stringa1.toLowerCase().replace(/\W/g, "");
// stringa2 = stringa2.toLowerCase().replace(/\W/g, "");


// return stringa1 === stringa2;

//     };

//     console.log(puliscilaUnPò(stringa1,stringa2));
//out put : 



// function confrontaMi(str1,str2){
//     str1= str1.toLowerCase().replace(/\W/g, "");
//     str2=str2.toLowerCase().replace(/\W/g, "");

//     return str1 === str2;
// }


// let caotIci = "???i topi non avevano ni poti!!!"
// let pilitIssimo = "i topi non avevano nipoti";

// console.log(confrontaMi(caotIci, pilitIssimo));