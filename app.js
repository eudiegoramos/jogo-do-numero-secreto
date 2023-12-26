let listaNumerosSorteados = [];
let numerosPossiveis = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Chute');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10:');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto e menor!');
        }else{
            exibirTextoNaTela('p', 'O numero secreto e maior!');
        }
    tentativas++;
    limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerosPossiveis + 1);

    let quantidadeNumerosSorteados = listaNumerosSorteados.length;
    
    if(quantidadeNumerosSorteados == numerosPossiveis){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}