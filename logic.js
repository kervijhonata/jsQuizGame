const container = document.querySelector(".gameArea")
const questions = [
    {number: 1, awnser: "Quem é você?", a: "Você", b: "Alguém", c: "Eu", rightAwnser: "Alguém"},
    {number: 2, awnser: "Qual seria a melhor arma para derrotar um lobo?", a: "Espada", b: "Lança", c: "Helicóptero", rightAwnser: "Lança"},
    {number: 3, awnser: "Talvez, uma foto", a: "Câmera", b: "Imagem", c: "Frame", rightAwnser: "Imagem"},
    {number: 4, awnser: "Qual o verdadeiro nome do nosso Planeta?", a: "Água", b: "Gaia", c: "Terra", rightAwnser: "Gaia"},
    {number: 5, awnser: "<xmp><img></xmp>", a: "Vídeo", b: "Imagem", c: "URL", rightAwnser: "Imagem"},
    {number: 6, awnser: "HTML é Considerada uma linguagem de programação?", a:"Sim, A partir do HTML5", b:"Não, Apenas marcação", c:"Sim, pois permite utilizar Javascript", rightAwnser: "Não, Apenas marcação"},
    {number: 7, awnser: "A tipagem da linguagem Javascript é considerada", a:"Fortemente tipada", b:"Fracamente tipada", c:"Tipagem Flexível", rightAwnser:"Fracamente tipada"},
]

var perguntaAtual = 0;
var pontuacao = 0;

function telaInicial(){
    container.innerHTML = `<h1>Game Quiz</h1>
    <h2>Bem vindo(a), <a class="starter" onClick="imprimePergunta(0);">começar</a>?</h2>`;
}
function limparTela(){
    container.innerHTML = "";
}
function certaResposta(){
    console.log("Certa resposta!");
    perguntaAtual += 1;
    pontuacao += 10;
    imprimePergunta(perguntaAtual)
}

function fimDeJogo(){
    if(pontuacao/10 < questions.length){
        // Encerra o jogo para a tela de Restart
        container.innerHTML = `<div class="restart"><h1>Fim de Jogo</h1>
        <h2>Você marcou ${pontuacao} pontos</h2>
        <h3 onclick="imprimePergunta(perguntaAtual)">[ Recomeçar ]</h3><div>`;
    }else{
        // Encerra o jogo para a tela de Finalização
        container.style.color = "white";
        container.style.backgroundColor = "green";
        container.style.animationName = "colorRound";
        container.style.animationDuration = "3s";
        container.style.animationIterationCount = "infinite"
        container.innerHTML = `<h1>Parabêns, você completou o desafio!</h1>
        <h2>Sua pontuação é de ${pontuacao} pontos!!</h2>`;
    }
    perguntaAtual = 0;
    pontuacao = 0;
}

//Imprime a tela de Início
telaInicial();

//Imprime a Pergunta Requisitada pelo seu número, servindo de Índice para o Array de objetos
function imprimePergunta(numPergunta){
    limparTela();
    // Verifica se pergunta atual está dentro da quantidade de perguntas;
    if(perguntaAtual < questions.length){
        container.innerHTML += `<div class="question" data-quest="${questions[numPergunta].number}">
        <span class="questTitle"><strong>Questão ${questions[numPergunta].number}:</strong> ${questions[numPergunta].awnser}</span>
        <button class="option" data-option="a" onclick="verificar(this, this)">${questions[numPergunta].a}</button>
        <button class="option" data-option="b" onclick="verificar(this, this)">${questions[numPergunta].b}</button>
        <button class="option" data-option="c" onclick="verificar(this, this)">${questions[numPergunta].c}</button>
        </div>`
    }else{
        //Encerra o Jogo quando o valor exceder a quantidade de perguntas;
        fimDeJogo()
    }
}

//Verifica se a resposta da pergunta atual corresponde ao valor presente no botão
function verificar(resposta){
    resposta.textContent == questions[perguntaAtual].rightAwnser ? certaResposta() : fimDeJogo();
}




// *** Testes feitos para outra lógica, usando MAP ***
// container.innerHTML += `<div class="question" data-quest="1">
//     <p>Questão ${questions.number}: ${questions.awnser}</p>
//     <button class="option" data-option="a">${questions.a}</button>
//     <button class="option" data-option="b">${questions.b}</button>
//     <button class="option" data-option="c">${questions.c}</button>
// </div>`;

// })
// const quest = questions.map((question, index) => {
//     container.innerHTML += `<div class="question" data-quest="1">
//     <p>Questão ${question.number}: ${question.awnser}</p>
//     <button class="option" data-option="a" onclick="verificar(this, this)">${question.a}</button>
//     <button class="option" data-option="b" onclick="verificar(this, this)">${question.b}</button>
//     <button class="option" data-option="c" onclick="verificar(this, this)">${question.c}</button>
// </div>`;