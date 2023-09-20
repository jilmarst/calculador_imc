// Seleciona o elemento HTML com o id 'calcular' e o armazena na variável 'calcular'.
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

// Limpa os campos de entrada definindo seus valores como vazios.
function limparCampos(){
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('resultado').textContent = ''// Limpa o resultado
}

// Função que calcula o IMC (Índice de Massa Corporal).
function imc() {
    // Obtém o valor do campo de entrada com id 'nome' e armazena na variável 'nome'.
    const nome = document.getElementById('nome').value;
    // Obtém o valor do campo de entrada com id 'altura' e converte para número, armazenando em 'altura'.
    const altura = +document.getElementById('altura').value;
    // Obtém o valor do campo de entrada com id 'peso' e converte para número, armazenando em 'peso'.
    const peso = +document.getElementById('peso').value;
    // Obtém o elemento HTML com id 'resultado' e o armazena na variável 'resultado'.
    const resultado = document.getElementById('resultado');


    // Verifica se os campos 'nome', 'altura' e 'peso' estão preenchidos.
    if (nome !== '' && altura !== '' && peso !== '') {
        // Calcula o valor do IMC.
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        // Inicializa a variável 'classificacao'.
        let classificacao = '';

        // Determina a classificação com base no valor do IMC.
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        // Exibe o resultado no elemento HTML 'resultado'.
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        // Se algum campo estiver em branco, exibe uma mensagem de preenchimento obrigatório.
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

// Adiciona um evento de clique ao botão com id 'calcular', que chama a função 'imc' quando o botão é clicado.
calcular.addEventListener('click', imc);
// Adiciona um evento de clique ao botão "Limpar".
limpar.addEventListener('click', limparCampos)
