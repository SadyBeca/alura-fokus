const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const descansoCurtoBt = document.querySelector('.app__card-button--curto');
const descansoLongoBt = document.querySelector('.app__card-button--longo');
const imagemHeader = document.querySelector('.app__image');

focoBt.addEventListener('click', () => {
    mudaDescanso('foco');
});

descansoCurtoBt.addEventListener('click', () => {
    mudaDescanso('descanso-curto');
});

descansoLongoBt.addEventListener('click', () => {
    mudaDescanso('descanso-longo');
});

function mudaDescanso(contexto){
    html.setAttribute('data-contexto', contexto);
    imagemHeader.setAttribute('src', `/imagens/${contexto}.png`)
}
