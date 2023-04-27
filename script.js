
/*
window.alert("Eae");

if (window.confirm("Antes de você continuar,eu quero fazer uma pergunta, pode ser?") == true) {
    window.prompt("Como você achou o meu site?");
    alert("Obrigado pela ajuda!")
}
*/

window.onresize = function() {
    var areasLinguagens = documento.getElementById("areasLinguagens");
    var larguraDaJanela = window.innerWidth;
    var posicaoDaDiv = areasLinguagens.getBoundingClientRect().right;

    if (posicaoDaDiv >= larguraDaJanela) 
    {
        areasLinguagens.classList.add("diminuir");
    } else {
        areasLinguagens.classList.remove("diminuir");
    }
}