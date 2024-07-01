SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

SOLUZIONE

HTML.INDEX
- all'interno di index.html creo un layout attraverso le classi bootstrap v5.3, in cui inserisco tre dive contententi rispettivamente una classe container, una clasee row e una classe col-12;
- all'interno della col-12 inserisco prima div contentente una classe card, la qual a sua volta conterrà una domanda rivolta all'utente ("Sei nella lista dei partecipanti della festa del grande Gatsby?") e un input di tipo testo in cui l'utente può digitare il proprio nome e cognome;
- sempre all'interno della col-12 inserico un bottone la cui funzione è di verificare, attraverso il file script.js, se l'utente è presente nella lista degli invitati oppure no;
- sempre all'interno della col-12 inserisco una altra card la cui funzione è dimostrare il risultato del controllo. Apparirà un messaggio diverso a seconda dell'esito del controllo

SCRIPT.JS
- nel file script.js compilo un array contenente la lista degli invitati;
- Inserisco la variabile di controllo;
- attraverso "addEventListener" faccio in modo che al bottone venga associata una funzione tramite il click del mouse;
- per sicurezza faccio in modo che l'eutente posssa inserire nell'input il suo nome e cognome anche usando lettere minuscole tramite il metodo lowercase;
- Usando un ciclo, mi assicuro che ai nomi degli invitati presenti nell'array venga associato un valore true affinché il bottone di controllo (presente nel) le trovi;
? SE il nome dell'utente compare nella lista negli invitati, allora può entrare;
ALTRIMENTI l'utente non può partecipare alla festa 