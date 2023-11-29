// Encontrar o botão adicionar tarefa
// quero capturar o seu clique

const btAdicionarTarefa = document.querySelector('.app__button--add-task');
const formularioAddTarefa = document.querySelector('.app__form-add-task');

btAdicionarTarefa.addEventListener('click', () => {
    formularioAddTarefa.classList.toggle('hidden');
})