const fodoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');

for (let x = 0; x < fodoes.length; x++) {
    console.log(x)
    fodoes[x].onclick = function () {
        for (let y = 0; y < fodoes.length; y++) {
            fodoes[y].classList.remove('ativo');
            textos[y].classList.remove('ativa');
        }
        fodoes[x].classList.add('ativo');
        textos[x].classList.add('ativa');
    }
    // fodoes[x].classList.remove('ativo');
}


const contadores = document.querySelectorAll('.contador');

let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('2034-04-26T00:00:00');
let tempoobjetivo2 = new Date ('2029-07-22T00:00:00');
let tempoobjetivo3 = new Date ('2026-04-27T68:00:00');
let tempoobjetivo4 = new Date ('2890-12-15T00:00:00');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for( let i=0; i < contadores.length; i++){
    contadores[i].textContent- calculaTempo(tempos[i]);
}

function calculaTempo(tempoobjetivo){
        let tempoFinal = tempoobjetivo = tempoAtual;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + " dias " + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}


















