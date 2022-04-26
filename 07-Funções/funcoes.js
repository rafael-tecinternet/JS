/* Sintaxe 1 (tradicional)
Função literal/anônima*/
let exemplo1 = function(){
    console.log("Função anônima / literal");
};
// Chamando a função 
exemplo1();

/* Sintaxe 2 (tradicional)
Função nomeada*/
function exemplo2 (){
    console.log("Função nomeada");
};
exemplo2(); // chamando a função

/* Sintaxe 3 (moderna)
Função Seta/Flecha (Arrow Function)*/ 
let exemplo3 = () => {
    console.log("Arrow Function");
};
exemplo3(); // chamada da função

//outro jeito de declarar
let exemplo3b = () => console.log("Arrow Function B");
exemplo3b();
valor = 10

//EXEMPLOS
//Função nomeada
function dobra(valor){
    return valor * 2;
}
console.log(dobra(50));

//Arrow Function
let dobraB = (valor) => {
    return valor * 2;
};
console.log(dobraB(20))
// mais simplificado
let dobraC = valor => valor * 2;
console.log(dobraC(15));

/* Exemplos anteriores */
let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
};

//arrow
let formataValor = valor => {
    return valor.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });
};

console.log(formataMoeda(preco));
console.log(formataValor(desconto));
console.log(formataValor(precoFinal));
