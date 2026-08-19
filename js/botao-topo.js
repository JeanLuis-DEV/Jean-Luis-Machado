// Procura no HTML o botão que possui a classe "botao-topo".
const botaoTopo = document.querySelector(".botao-topo");

// Define quantos pixels a página precisa rolar para o botão aparecer.
const distanciaParaExibirBotao = 300;

// Define a duração da animação de retorno ao topo, em milissegundos.
const duracaoRolagem = 900;

// Mostra ou esconde o botão conforme a posição atual da página.
function atualizarVisibilidadeBotao() {
    const paginaFoiRolada = window.scrollY > distanciaParaExibirBotao;
    botaoTopo.classList.toggle("visivel", paginaFoiRolada);
}

// Move a página de volta ao topo usando uma animação suave.
function rolarParaTopoSuavemente() {
    const posicaoInicial = window.scrollY;
    let momentoInicial = null;

    // Esta função calcula e executa cada pequeno passo da animação.
    function animarRolagem(momentoAtual) {
        if (momentoInicial === null) {
            momentoInicial = momentoAtual;
        }

        const tempoDecorrido = momentoAtual - momentoInicial;
        const progresso = Math.min(tempoDecorrido / duracaoRolagem, 1);

        // Faz a rolagem começar mais rápida e terminar mais devagar.
        const progressoSuave = 1 - Math.pow(1 - progresso, 3);
        const novaPosicao = posicaoInicial * (1 - progressoSuave);

        window.scrollTo(0, novaPosicao);

        // Continua a animação enquanto ela ainda não chegou ao final.
        if (progresso < 1) {
            window.requestAnimationFrame(animarRolagem);
        }
    }

    window.requestAnimationFrame(animarRolagem);
}

// Inicia a rolagem suave quando o visitante clica no botão.
botaoTopo.addEventListener("click", rolarParaTopoSuavemente);

// Atualiza a visibilidade do botão sempre que a página for rolada.
window.addEventListener("scroll", atualizarVisibilidadeBotao);

// Define o estado correto do botão assim que a página termina de carregar.
atualizarVisibilidadeBotao();
