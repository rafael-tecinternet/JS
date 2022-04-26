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
legenda.innerHTML = "<b>Legenda da imagem</b>" //innerhtml serve pra mudar o html com tags (deixar negrito) 

//CSS via JS
titulo.style.textAlign = "center";
titulo.style.backgroundImage = "linear-gradient(lightyellow, lightblue)";
titulo.style.color = "#333";

const listaEditores = document.querySelector('#lista-editores'); /* # serve para selecionar uma lista */
const ultimo = listaEditores.querySelector('li:last-child');
const primeiro = listaEditores.querySelector('li:first-child');
const outro = listaEditores.querySelector('li:nth-child(2)');
/* 
outro.innerHTML = "Agora vai";
outro.style.color = "red"; */
ultimo.classList.add('destaque-item'); /* Adicionando classe na constante */

// Adicionando o atributo target em todos os links da lista de refêrencia
// Selecionando todos os links contidos na lista ul
const links = document.querySelectorAll('ul li a');
console.log(links)
//links[1].style.color = "red";

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank') // adiciona um atributo
}