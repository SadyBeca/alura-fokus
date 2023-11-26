const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const imagemHeader = document.querySelector('.app__image');
const tituloCabecalho = document.querySelector('.app__title');
const botoesDescanso = document.querySelectorAll('.app__card-button');

focoBt.addEventListener('click', () => {
    mudaDescanso('foco');
    focoBt.classList.add('active');
});

descansoCurtoBt.addEventListener('click', () => {
    mudaDescanso('descanso-curto');
    descansoCurtoBt.classList.add('active');
});

descansoLongoBt.addEventListener('click', () => {
    mudaDescanso('descanso-longo');
    descansoLongoBt.classList.add('active');
});

function mudaDescanso(contexto){
    html.setAttribute('data-contexto', contexto);
    imagemHeader.setAttribute('src', `/imagens/${contexto}.png`);
    botoesDescanso.forEach(function (botaodoArray){
        botaodoArray.classList.remove('active');
    })
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
