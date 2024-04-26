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
        textos[x].classList.add('ativo');
    }
    // fodoes[x].classList.remove('ativo');
}
const contadores = document.querySelectorAll('.contador');

let tempoAtual = new Date();
let tempoobjetivo1 = new Date('2024-04-28T00:00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dia = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";


































