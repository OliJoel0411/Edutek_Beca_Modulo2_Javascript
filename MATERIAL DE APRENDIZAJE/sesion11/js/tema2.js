

//guardamos referencias
let valorIngresado = document.getElementById("valorIngresado");
let areaPruebas = document.getElementById("areaPrueba");

function pintarDiv() {
    let opcion = valorIngresado.value;
    //verificamos el valor y pintamos segun lo ingresado
    //= asigna, == compara
    if (opcion == 1) {
        //pintamos rojo
        areaPruebas.style.backgroundColor = "red";
    } else if (opcion == 2) {
        //pintamos azul
        areaPruebas.style.backgroundColor = "blue";
    } else if (opcion == 3) {
        //pintamos verde
        areaPruebas.style.backgroundColor = "green";
    }else{
        areaPruebas.style.display = "none";
    }
}

function moverTitulo(){
    //selector de clases
    let valor = document.getElementsByClassName("modificar");
    console.log(valor);

    let titulo = valor[0];
    console.log(titulo);

    let margenActual = parseInt(titulo.style.marginLeft);
    //verificamos si es NaN, de serlo, le damos otro valor
    if(isNaN(margenActual)){
        margenActual = 0;
    }
    console.log(margenActual);
    //
    margenActual = margenActual + 10;
    console.log(margenActual);
    //le asignamos el margen
    titulo.style.marginLeft = margenActual +"px";
    console.log(titulo.style.marginLeft);

}