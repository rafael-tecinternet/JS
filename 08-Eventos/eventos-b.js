// Escopo local e global
for(let i = 0; i < 100; i++ ){
    console.log(i);
};
document.write(i);



function clique() {
    var nome = document.getElementById("nome").value;
    var resultado = document.getElementById("resultado");
    return resultado.textContent = nome;
}

