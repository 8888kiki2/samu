let numeroSecreto = Math.random()*10;
console.log(numeroSecreto);
let chute ='';

while(chute== ''){
    chute = prompt('escolha um numero de 0 a 10');
}
if(numeroSecreto == chute){
    alert('párabens voce é um bosta :');
    console.log('parabens acertou!!!');
} else{
    alert('errou, que pena ');
    console.log('infelizmente, errou!!');
}