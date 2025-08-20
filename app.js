let amigos = []

function agregarAmigo() {
    const input = document.getElementById("amigo"); 
    const nombre = input.value.trim();

    if (nombre === "") { 
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); 

    input.value = "";

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) { 
        const li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No ha ingresado ningun amigo par sortear.");
        return;
    }

    let indice = parseInt(Math.random() * amigos.length);

    let ganador = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${ganador}</li>`;
}

function reiniciarJuego() {
    amigos = [];

    mostrarListaAmigos();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}