/* Estruturas de Controle Condicional */

/* if/else, esle if */

let nome = "Rafael";
let idade = 17;

//Verificar a idade da pesoa

// Condicional encadeada
let mensagem;

//if(condição) { comando }
/* if (idade > 18) {
    mensagem = "Você é maior de idade";
} else {
    mensagem = "Você é o amor da minha vida";
};
 console.log(mensagem);
 document.write (mensagem); */

if(idade >= 60) {
    mensagem = "Você é idoso";
} else if(idade >= 18) {
    mensagem = "É adulto, mas não idoso(a)";
} else {
    //mensagem = "É menor de idade";
    //condicional aninhada
    if(idade >= 12 && idade < 18) {
        mensagem = "É adolescente";
    } else {
        mensagem = "É baby shark";
    }
}
console.log(`${nome}, ${mensagem}`);


let nota1 = 5.5;
let nota2 = 8.5;
let resultado;
let media = (nota1 + nota2) / 2
console.log(media)

/* if(media >= 7){
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}
console.log(resultado) */

// if/else (shorthand if/else - operador ternario ?:)
resultado = media >= 7 ? "aprovado" : "reprovado";
console.log(resultado)

/* switch/case/default/break */
/* Opções do chatobot:
1 -> informações
2 -> reclamação
3 -> dúvidas
x -> opção desconhecida, direcionar um humano */

let opcao = 4;
let textoOpcao;

switch (opcao) {
    case 1:
        textoOpcao = 'Legal, o que deseja saber ?';
        break;
    case 2:
        textoOpcao = 'Que pena, o que aconteceu ?';
        break;
    case 3:
        textoOpcao = 'Certo, qual sua dúvida ?';
        break;
    default:
        textoOpcao = 'Hum, não entendi... vou te transferir.';
        break;
}
console.log(`Você escolheu a opção ${opcao}`)
console.log(textoOpcao)

/* Operadores de comparação */
let a = 10;
let b = "10";
console.log(a == b); //true ou false