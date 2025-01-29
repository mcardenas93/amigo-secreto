// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let comodin = 0;
function agregarAmigo() {
     let campoNombre = "";
      campoNombre =  document.getElementById('amigo').value;
    
    if (campoNombre === null || campoNombre ==="") {
        alert("Por favor, inserte un nombre.");
    }else{
        console.log(campoNombre);
        insertarAmigo();
        limpiarCaja();           
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}



function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*amigos.length);

    console.log(numeroGenerado);
    
    //Si ya sorteamos todos los números
    if (numeroGenerado <= amigos.length) {
        const listaRe = document.getElementById('resultado');
        const elemento = document.createElement("li");
     elemento.textContent = "El amigo secreto sorteado es:" + amigos[numeroGenerado];
     listaRe.appendChild(elemento);
     console.log(numeroGenerado);
     limpiarLista();
    } 
    document.querySelector('[class="button-draw"]').setAttribute('disabled','true'); 
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerText="";
}

function insertarAmigo(){
    campoNombre = document.getElementById('amigo').value;
    amigos.push(campoNombre);
   const lista = document.getElementById('listaAmigos');
   for (let i = 0; i < amigos.length; i++) {
    comodin =amigos.length-1;
    if(i === comodin){
    const elemento = document.createElement("li");
    elemento.textContent = amigos[i];
    lista.appendChild(elemento);
    console.log('elementos en array',amigos.length);
    console.log('posion',i);
    }
   // console.log('fuera ifelementos en array',amigos.length);
    //console.log('fuera if posion',i);
//asignarTextoElemento('ul',campoNombre);
   }
}


/*
sin el for 
 const elemento = document.createElement("li");
    elemento.textContent = amigos[amigos.length-1];
    lista.appendChild(elemento);
    console.log('elementos en array',amigos.length);
    console.log('posion',amigos.length-1);
*/
