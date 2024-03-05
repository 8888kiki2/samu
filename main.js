alert('bem vindos a lazyTown');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');
 
while(nomeUsuario == "" || nomeUsuario == null){
    nomeUsuario == prompt('Qual é seu nome??');
}

anterior.textContent = nomeUsuario;
