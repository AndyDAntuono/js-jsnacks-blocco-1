const elenco_invitati = ["Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Nicholas Carraway", "Jordan Baker", "Myrtle Wilson", "George Wilson", "Klipspringer", "Myron Lupus", "Dan Cody", "Kinsella", "Mavromichaelis", "Reba"];

const btn = document.getElementById("check");
let found_guest = false;

btn.addEventListener("click", function () {

    let word = document.getElementById("party_animal").value.toLowerCase();

    for (let i = 0; i < elenco_invitati.length; i++) {
        if (elenco_invitati[i].toLowerCase() === word) {
            found_guest = true;
        }
    }

    if (found_guest === true) {
        document.getElementById("response").innerText = "Sei nella lista degli initati. Puoi entrare!"
    }    

    else {
        document.getElementById("response").innerText = "Spiacente, non sei nella lista degli invitati. Non puoi entrare!"
    }

})