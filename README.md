spread operator / splat operator   ... : permette a rottura o creanza ad un array;

Selfwork Funzioni 4
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

Esempio:
Input: “i topi non avevano nipoti”
Output: true




ELENCO PRIMITIVI= NUMBER, STRING, BOOLEAN, UNDEFINED, NULL , SYMBOL

ELENCO STRUTTURALI: OBJECT

STAMPO CON:
console.log



i tipi primitivi: 

string è di input 
di output c'è il booleano con veritiero o falso 




USARE .replace()

metodologia per pulizia perchè rimuove strani simboli etc..


Dot Synstax : richiamo operazioni per legare ad un oggetto, lego ad un altra operazione _metodo

function confrontaMi(str1,str2){
    str1= str1.toLowerCase().replace(/[]);
    str2=str2.toLowerCase().replace(/[]);

    return str1 === str2;
}


let caotIci = "h& i tipo non avevano ni_poti!!!"
let pilitIssimo = "i topi non avevano nipoti";

console.log(confrontaMi(caotIci, pilitIssimo));