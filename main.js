const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const imagemHeader = document.querySelector('.app__image');
const tituloCabecalho = document.querySelector('.app__title');
const botoesDescanso = document.querySelectorAll('.app__card-button');
const startPause = document.querySelector('#start-pause');
const startPauseBt = document.querySelector('#start-pause span');
const imagemBtStartPause = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

let tempoDecorridoContador = 1500;
let intervaloId = null; 

const musicaFocoInput = document.querySelector('#alternar-musica');
const musicaFoco = new Audio('/sons/luna-rise-part-one.mp3');
musicaFoco.loop = true;

const musicaPlay = new Audio('/sons/play.wav');
const musicaPause = new Audio('/sons/pause.mp3');
const musicaAlerta = new Audio('/sons/beep.mp3');

musicaFocoInput.addEventListener('change', () => {
    if (musicaFoco.paused){
        musicaFoco.play();
    }
    else {
        musicaFoco.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoContador = 1500;
    mudaDescanso('foco');
    focoBt.classList.add('active');
});

descansoCurtoBt.addEventListener('click', () => {
    tempoDecorridoContador = 300;
    mudaDescanso('descanso-curto');
    descansoCurtoBt.classList.add('active');
});

descansoLongoBt.addEventListener('click', () => {
    tempoDecorridoContador = 900;
    mudaDescanso('descanso-longo');
    descansoLongoBt.classList.add('active');
});

function mudaDescanso(contexto){
    html.setAttribute('data-contexto', contexto);
    imagemHeader.setAttribute('src', `/imagens/${contexto}.png`);
    botoesDescanso.forEach(function (botaodoArray){
        botaodoArray.classList.remove('active');
    })
    mostrarTempo();
    switch (contexto){
        case "foco":
            tituloCabecalho.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>          
            `
            break;
        case "descanso-curto":
            tituloCabecalho.innerHTML = `
            Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        
        case "descanso-longo":
            tituloCabecalho.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
    
}

const decrementaContador = () => {
    if (tempoDecorridoContador <= 0) {
        musicaAlerta.play()
        alert('Tempo finalizado!');
        reiniciarContador();
        return;       
    }
    tempoDecorridoContador -= 1;
    mostrarTempo();    
}

startPause.addEventListener('click', () => {
    if (intervaloId){
        musicaPause.play();
    }
    musicaPlay.play();
    iniciarOuPausarContador();
});

function iniciarOuPausarContador() {
    if (intervaloId){
        reiniciarContador();
        return;
    }
    intervaloId = setInterval(decrementaContador, 1000);
    startPauseBt.textContent = "Pausar";
    imagemBtStartPause.setAttribute('src','/imagens/pause.png');
}

function reiniciarContador(){
    clearInterval(intervaloId);
    startPauseBt.textContent = "Começar";
    imagemBtStartPause.setAttribute('src','/imagens/play_arrow.png')
    intervaloId = null;
}

function mostrarTempo(){
    const tempoEmMilissegundos = new Date(tempoDecorridoContador * 1000);
    const tempoFormatado = tempoEmMilissegundos.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();

