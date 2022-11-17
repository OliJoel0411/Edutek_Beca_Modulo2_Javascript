
function verificarColor(){
    let elemento = document.getElementById("divColoreado");

    console.log(elemento.style.backgroundColor);

    //rgb(210, 105, 30)
    window.getComputedStyle(document.getElementById("divColoreado")).getPropertyValue("background-color");
}

