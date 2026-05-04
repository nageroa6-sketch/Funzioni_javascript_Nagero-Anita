spread operator / splat operator   ... : permette a rottura o creanza ad un array;

Selfwork Funzioni 
COSA IMPARI :

 parametro formale(str,numero,frase) è come 1 variabile di lavoro, la funzione la userà al posto del valore che gli passerai
un parametro reale(usi quando chiami la f.) è invece un valore concreto passi quando chiami la funzione come esempio la nostra frase detta: palindroma.


Esempio:
Input: “i topi non avevano nipoti”
Output: true

 il nome `str` è solo “un posto” che contiene il valore che gli passo quando chiamo la funzione.(param. form.); 
ELENCO PRIMITIVI= NUMBER, STRING, BOOLEAN, UNDEFINED, NULL , SYMBOL


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
  - dichiaro la frase
  - la pulisco
  - la inverto
  - la confronto
  - restituisco un booleano

console.log(confrontaMi(caotIci, pilitIssimo));


                            APPUNTI PULITI- VIDEO PILLOLA
//OBBIETTIVO:Verificare se una stringa è una frase palindroma


//parametro formale 

function controlString(stringa) {
 


    stringa = stringa.replace(/\W/g, "");




    let reversed = stringa.split(' ').reverse().join(' ')



if(stringa == reversed){
    return true{

    }else {
        return false
    }
}

//frase palindroma: inserisco-

console.log('i topi non avevano nipoti);

//DISCORSO BOOLEANO; TRUE O FALSE( E LA FRASE POLINDROMA AD USCITA) + METODI SPLIT REVERSE JOIN
   // questa non lo è:  console.log( controlString('si dice anche ke'));

    //INVOCHIAMO LA FUNZIONE
// si vedrà poi con console.log grazie al metodo replace-creo per verificare la poli.( METODI E FUNZIONI JS)
//con: parametro reale 


//controlString(`ciao sono stringa nome`)

}







split(separator)
divide una stringa in tanti pezzi 

reverse()
inverte l’ordine  in 1 array


join(separator)
ricompatta un array in una sola stringa.

replace(/pattern/, "")
cerca un pezzo di testo (o un tipo di carattere) con un pattern (es. /\W/g per togliere spazi e punteggiatura) e lo sostituisce con qualcosa (anche niente: "").
Si usa spesso prima di split / reverse / join per pulire la stringa.

Se vuoi, ti preparo anche una versione ultra‑corta tipo:

split → stringa → array

reverse → inverte l’ordine dell’array

join → array → stringa

replace → pulisce/modifica la stringa

