/* Estruturas de controle de repetição 

while (enquanto)
do/while(faça/enquanto)
for (para uma determinada quantidade de vez) */

//Exemplo 1 : while
let i = 1;
while ( i <= 5) {
    console.log(`O valor é: ${i}`);
    i++;
}

//Exemplo 2 : do/while
let j = 1;
do {
    console.log(`J é ${j}`);
    j++;
} while (j < 10);

//Exemplo 3: for
for (let k = 1; k <= 5; k++) {
    console.log(`K vale: ${k}`);  
}

// Exemplo 4 - loop interando sobre os dados de array
let alunos = ["Chiquinha", "Chaves", "Madruga", "kiko", "Florinda", "Barriga"];
//Cache do tamanho array
let tamanho = alunos.length;
//console.log(tamanho)
for(let i = 0; i < tamanho; i++){
    console.log(alunos[i])
}