
/*
window.alert("Eae");

if (window.confirm("Antes de você continuar,eu quero fazer uma pergunta, pode ser?") == true) {
    window.prompt("Como você achou o meu site?");
    alert("Obrigado pela ajuda!")
}
*/

function barraMenu() {
    var camadaM = document.getElementById("camadaM");
    var sombra = document.getElementById("sombra");

    if (camadaM.style.left == "-200px") 
    {
        sombra.style.opacity = "50%"
        camadaM.style.left = "0";
        camadaM.style.width = "200px";
        camadaM.style.height = "100%";
    } else
    {
        sombra.style.opacity = "0"
        camadaM.style.left = "-200px";
        camadaM.style.width = "0";
        camadaM.style.height = "0";
    }

    

}