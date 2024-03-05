alert('bem vindos a lazyTown');
let nomeUsuario = prompt('Qual é seu nome??');
let anterior = document.querySelector('#texto');
 
while(nomeUsuario == ""){
    nomeUsuario == prompt('Qual é seu nome??');
}

anterior.textContent = nomeUsuario;
