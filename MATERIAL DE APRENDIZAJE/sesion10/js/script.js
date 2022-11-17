
//definimos variables globales
let mensaje = "Saludos";
let elementoCambiar = document.getElementById("miDiv");

function modificarDiv() {
    let rangeValor = document.getElementById("miRange").value;
    let unidad = "em";
    //console.log(document.getElementById("miRange").value + unidad);
    //cambiamos el ancho del div
    elementoCambiar.style.width = rangeValor + unidad;

    //cambiamos el alto del div
    elementoCambiar.style.height = rangeValor + unidad;
}

