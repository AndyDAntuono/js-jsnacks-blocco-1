//nel file script.js compilo un array contenente la lista degli invitati
const elenco_invitati = ["Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Nicholas Carraway", "Jordan Baker", "Myrtle Wilson", "George Wilson", "Klipspringer", "Myron Lupus", "Dan Cody", "Kinsella", "Mavromichaelis", "Reba"];

////Inserisco la variabile di controllo
const btn = document.getElementById("check");
let found_guest = false;

//attraverso "addEventListener" faccio in modo che al bottone venga associata una funzione tramite il click del mouse
btn.addEventListener("click", function () {

    //per sicurezza faccio in modo che l'eutente posssa inserire nell'input il suo nome e cognome anche usando lettere minuscole tramite il metodo lowercase
    let word = document.getElementById("party_animal").value.toLowerCase();

    //Usando un ciclo, mi assicuro che ai nomi degli invitati presenti nell'array venga associato un valore true affinché il bottone di controllo (presente nel) le trovi;
    for (let i = 0; i < elenco_invitati.length; i++) {
        if (elenco_invitati[i].toLowerCase() === word) {
            found_guest = true;
        }
    }

    //se il nome dell'utente compare nella lista negli invitati, allora può entrare;
    if (found_guest === true) {
        document.getElementById("response").innerText = "Sei nella lista degli initati. Puoi entrare!"
    }    

    //altrimenti l'utente non può partecipare alla festa 
    else {
        document.getElementById("response").innerText = "Spiacente, non sei nella lista degli invitati. Non puoi entrare!"
    }

})