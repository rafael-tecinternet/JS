/* Métodos/Funções de acesso a seleção

getElementById() -> seleciona um elemento pedo ID

querySelector() -> seleciona UM elemento de acordo com um seletor

querySelectorAll() -> seleciona VÁRIOS elementos de acordo com um seletor */

//Selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);
//Selecionando pela TAG
const pagina = document.querySelector('body')
console.log(pagina);
//selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll('h2')
console.log(subtitulo)
/* Modificando elementos */
titulo.textContent = "Olá Mundo!";
subtitulo[0].textContent = "Full Stack";

const legenda = document.querySelector('figcaption')
legenda.innerHTML = "<b>Legenda da imagem</b>" //innerhtml serve pra mudar tag 

//CSS via JS
titulo.style.textAlign = "center";
titulo.style.backgroundImage = "linear-gradient(lightyellow, lightblue)";
titulo.style.color= "#333";

