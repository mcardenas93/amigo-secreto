// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let numeroSecreto = 0;
let intentos = 0;

let numeroMaximo = 10;
//let campoNombre = "";


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo() {
     let campoNombre = document.getElementById('amigo').value;
    
    if (campoNombre != null) {
        console.log(campoNombre);
        insertarAmigo();
        limpiarCaja();      
        //document.getElementById('Añadir').removeAttribute('disabled'); 
    } 
    else {
        //El usuario no acertó.
        if (campoNombre == null) {
            alert("Por favor, inserte un nombre.");
            //asignarTextoElemento('H2',`Acertte el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
           
        }
        //intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function insertarAmigo(){
campoNombre = document.getElementById('amigo').value;
amigos.push(campoNombre);
asignarTextoElemento('ul',campoNombre);
}


function condicionesIniciales() {
   // asignarTextoElemento('h1','Juego del número secreto!');
    //asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();