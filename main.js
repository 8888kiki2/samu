// alert('bem vindos a lazyTown');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');
 
while (nomeUsuario == ""){
    nomeUsuario = prompt('Qual é seu nome??');
}

if (nomeUsuario == null){
    anterior.textContent = 'LazyTown';
}else {
anterior.textContent = nomeUsuario;
}
