const botaoCarossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem');
botaoCarossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.ativo');
        botaoSelecionado.classList.remove('ativo');
        botao.classList.add('ativo');

        const imagemSelecionada = document.querySelector('.selecionado');
        imagemSelecionada.classList.remove('selecionado');
        
        imagem[indice].classList.add('selecionado')
    })
});