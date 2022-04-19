//  comentário de uma linha - atalho ctrol ;

/*Bloco de cometário - atalho shif alt A */


// alert("Olá, Mundo!");

//comando de saída para o consele
console.log("Olá, Mundo!");

/*variáveis

Palavras-chave: var, let, const

VAR -> variável de escopo global
LET -> variável de escopo de bloco
CONST -> const de escopo de bloco */

const nome = "Rafael"; //constante
let ano = 2022; // variável de escopo local
var curso = "Técnio em Informática para Internet"; // variável global

// Recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);
//concatenação
console.log("Eu sou o " +nome+ " e em " +ano+ " estou estudando no curso " +curso+ ".");
// template String literal
console.log(`Atualmente, estamos fazerndo o curso de ${curso}`);
console.log(`Eu sou o ${nome} e em ${ano} estou estudando no curso ${curso}.`)

/*Operadores matemátios:
+ adição
- subtração
/ divisão
* multiplicação */
 
let produto = "TV led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;

console.log(`Temos atualmete no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco} (cada) e valor total de ${total}.`);