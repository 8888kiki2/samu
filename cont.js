const fodoes = document.querySelectorAll('.objetivos');

for (let x = 0; x<fodoes.length; x++){
    console.log(x)
   fodoes[x].onclick = function() {
    for(let y = 0; y< fodoes.length; y++){
        fodoes[y].classList.remove('ativo')
    }
    fodoes[x].classList.add('ativo'); 
   } 
  // fodoes[x].classList.remove('ativo')
}




































