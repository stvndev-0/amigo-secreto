// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const id = 'amigo'
    const nombre = document.getElementById(id).value

    if (nombre == '') {
        alert('Por favor, inserte un nombre.')
    } else {
        if (amigos.includes(nombre)) {
            alert('El amigo ya esta en la lista.')
            return
        }
        amigos.push(nombre)
        listarAmigos()
    }

    limpiarInput(id)
}

function limpiarInput(id) {
    document.getElementById(id).value = '';
}

function listarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    const newLi = document.createElement('li');

    newLi.innerHTML = '';

    amigos.forEach(amigo => {
        newLi.innerText = amigo
    });

    listaAmigos.appendChild(newLi);
}

function sortearAmigo() {
    console.log(amigos)
    if (amigos.length <= 1) {
        alert('Ingresa mas de un amigo.')
    } else {
        const resultado = document.getElementById('resultado');
        const newSpan = document.createElement('span');
        const nombreAmigo = sorteo()
        
        limpiarUl()
        newSpan.innerHTML = `El amigo sorteado fue: ${nombreAmigo}`;

        console.log(nombreAmigo, newSpan)
    
    
        resultado.appendChild(newSpan);
    }
}

function sorteo() {
    const numeroSorteado = Math.floor(Math.random()*amigos.length)
    return amigos[numeroSorteado]
}


function limpiarListaYarray() {
    document.getElementById('listaAmigos').innerHTML = ''
    document.getElementById('resultado').innerHTML = ''
    amigos.length = 0
}