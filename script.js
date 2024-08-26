const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chega em casa e percebe que está passando as olímpiadas, só que está passando dois esportes: Vôlei e Salto com Vara, qual você escolhe assistir?",
        alternativas: [
            {
                texto: "Vôlei",
                afirmacao: "O Brasil vence e você fica feliz "
            },
            {
                texto: "Salto com Vara",
                afirmacao: "O Brasil perde e você fica triste."
            }
        ]
    },
    {
        enunciado: "Após os jogos, você decidi assistir um filme, mas não sabe se vai no cinema ou assiste em casa. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Ir ao cinema.",
                afirmacao: "Você assisti Deadpool and Wolverine e sai feliz da sessão."
            },
            {
                texto: "Ficar em casa.",
                afirmacao: "Você assiste Parasita, e passa a considerar ele o melhor filme da sua vida."
            }
        ]
    },
    {
        enunciado: "Após assistir você sente uma vontade enorme de comer algo. O que você faz?",
        alternativas: [
            {
                texto: "Faz um sanduba.",
                afirmacao: "Você fica satisfeito."
            },
            {
                texto: " Faz um pão com ovo.",
                afirmacao: "Você fica satisfeito.."
            }
        ]
    },
    {
        enunciado: "Agora bem alimentado, você decide jogar um videogame, mas não sabe qual. E agora?",
        alternativas: [
            {
                texto: "Jogo um Forza.",
                afirmacao: "Você se diverte."
            },
            {
                texto: "Jogo um Fifa.",
                afirmacao: "Você joga mas acaba se estressando!"
            }
        ]
    },
    {
        enunciado: "Agora você se sente cansado e resolve ir dormir, entretanto no meio da noite você sente frio, mas a coberta não consegue cobrir os pés e o dorso ao mesmo tempo, qual deles você esoclher cobrir? ",
        alternativas: [
            {
                texto: "Cobrir os pés.",
                afirmacao: "Você se aquece, e dorme bem."
            },
            {
                texto: "Cobrir o dorso.",
                afirmacao: "Você dorme com frio e com medo que algum monstro puxe você pelo pé. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
