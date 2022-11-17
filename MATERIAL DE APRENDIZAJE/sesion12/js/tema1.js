//definir arreglo
//funcion que se invoca al presionar el boton
//verificar que opcion esta marcada
//Ejecutar funcionalidad segun opcion

let arreglo = [];
let valor = document.getElementById("txtValor");
let areaTexto = document.getElementById("areaTexto");

function ejecutarOpcion() {
    //verifico la opcion seleccionada
    //invoco funcion segun se necesite
    let opciones = document.getElementsByTagName("input");
    //verificamos cada opcion, a partir del indice 1
    //.checked nos permite verificar si el radio esta marcado
    if (opciones[1].checked) {
        //invocar funcion de opcion1
        agregarElementoFinal();
    } else if (opciones[2].checked) {
        //invocar funcion de opcion2
        agregarElementoPrincipio();
    } else if (opciones[3].checked) {
        //invocar funcion de opcion3
        removerUltimoElemento();
    } else if (opciones[4].checked) {
        //invocar funcion de opcion4
        removerPrimerElemento();
    } else {
        //no hay ninguna opcion marcada
        console.log("Debe elegir una opcion");
    }
    //limpiar cuadro texto
    limpiarCuadroTexto();
}

function agregarElementoFinal() {
    arreglo.push(valor.value);
    areaTexto.innerHTML = arreglo;
    //limpiar cuadro texto
}

function agregarElementoPrincipio() {
    arreglo.unshift(valor.value);
    areaTexto.innerHTML = arreglo;
}

function removerUltimoElemento() {
    arreglo.pop();
    areaTexto.innerHTML = arreglo;
}

function removerPrimerElemento(){
    arreglo.shift();
    areaTexto.innerHTML = arreglo;
}

function limpiarCuadroTexto(){
    valor.value = "";
    valor.focus();
}