/* //solução 1:
// Declarando a função que é chamada quando clicamos no botão converter di HTML
function converteDolar() {
    // pegando o valor digitado no campo valorDolar do HTML
    let valorDolar = document.getElementById('valorDolar').value;
    // converte o valor digitado considerando o valor do dólar
    let converteReal = valorDolar * 4.97;
    // imprime o resultado da conversão na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;
    //mudar a cor para vermelho
    resultado.style.color = "red";
}; */
//solução 2:
// Declarando a função que é chamada quando clicamos no botão converter di HTML
function converteDolar() {
    // pegando o valor digitado no campo valorDolar do HTML
    let valorDolar = document.getElementById('valorDolar').value;

    // converte o valor digitado considerando o valor do dólar
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let converteReal = valorDolar * cotacaoDolar;

    // imprime o resultado da conversão na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;
    
    //mudar a cor para vermelho
    resultado.style.color = "red";
};
