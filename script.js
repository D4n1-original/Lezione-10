let bottone = document.getElementById("bottone"); 
console.log(bottone.innerHTML);
bottone.innerHTML = "Selezionato";
console.log(bottone.innerHTML);

let paragrafi = document.getElementsByClassName("testo")
for (let i = 1; i < paragrafi.length; i++) {
    paragrafi[i].style.color = "red"
}

let sfondo = document.querySelectorAll(".testo")
sfondo[1].style.backgroundColor="red"
//console.log(sfondo.length);

let contenitore = document.getElementById("contenitore")
let figli = contenitore.children
for (let i=0;i<figli.length; i++) {
    console.log(figli[i].tagName);
}

function allerta() {
    alert("mi hai cliccato!")
}

function toggleClass() {
    //document.getElementById("contenitore").classList.add("acceso")
    //document.getElementById("contenitore").classList.remove("acceso")
    document.getElementById("contenitore").classList.toggle("acceso")
}

function aggiungiElemento(){
    let contenitore = document.getElementById("nuovoContenuto")
    let nuovoElemento = document.createElement("p")
    nuovoElemento.textContent = "Sono un nuovo elemento della lista"
        contenitore.appendChild(nuovoElemento)
    }

function soloUnElemento() {
    let contenitore = document.getElementById("nuovoContenuto")
    if (!document.getElementById("nuovoElemento")) {
        let nuovoElemento = document.createElement("p")
        nuovoElemento.id = "nuovoElemento"
        nuovoElemento.textContent = "sono l'unico elemento della lista"
        contenitore.appendChild(nuovoElemento)
    } else {
        console.log("l'elemento è stato già creato");
    }
}

function rimuoviElemento() {
    let contenitore = document.getElementById("nuovoContenuto")
    if (contenitore.lastChild) {
        contenitore.removeChild(contenitore.lastChild)
    }
}

function toggleSezione() {
    let sezione = document.getElementById("nuovoContenuto")
    if (sezione.style.display ==="block") {
        sezione.style.display = "none"
    } else {
        sezione.style.display = "block"
    }
}