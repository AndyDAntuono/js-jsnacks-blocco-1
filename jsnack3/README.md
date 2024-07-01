SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

SOLUZIONE

HTML
- come per jsnack1, creo per prima cosa un laouto tramite boostrap;
- creo div card in cui chiedo all'utente di inserire un numerro a 4 cifre tramite l'iinput con id "insert_number";
- poi inserisco un bottone incaricato di avviare la somma delle quattro cifre, a cui daò l'id "calc"
- infine creo un altra card in cui espongo il risultato della somma

SCRIPT
- creo un costante btn a cui associo l'id del pulsante "calc" presente nel file html;
- attraverso il metodo "addEventListener" faccio in modo che al bottone "calc" venga associata una funzione tramite il click del mouse;
- creo la variabile number, chiamata number a cui do lo stesso valore di "insert_number"
- inserisco poi una altra variabile a cui associo il valore number ma condizionato dal metodo split
- creo poi un ciclo in cui calcolo la somma delle singole cifra che componevao "insert_number"
- creao poi una variabie che associo all'id "result" del file html