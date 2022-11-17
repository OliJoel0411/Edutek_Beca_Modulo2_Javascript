
const rutas = ["./img/papel.jpg", "./img/piedra.png", "./img/tijera.png"];
cambiarImagen();
//definir funcion
//generar numero aleatorio
//obtener el elemento para poder cambiar su atributo src
//en base al numero mostrar una imagen
function cambiarImagen() {
    let elemento = document.getElementById("imagen");
    let parrafo = document.getElementById("numero");
    //verificamos el numero generado
    //y asignamos una imagen


    let numero = generarNumero(3);
    if (numero == 1) {
        elemento.src = rutas[numero - 1];
        parrafo.innerHTML = "Numero generado: " + numero;
    } else if (numero == 2) {
        elemento.src = rutas[numero - 1];
        parrafo.innerHTML = "Numero generado: " + numero;
    }
    else {
        elemento.src = rutas[numero - 1];
        parrafo.innerHTML = "Numero generado: " + numero;
    }
}

//Extraer la logica de generar numero aleatorio en una funcion que devuelva dicho numero

//Refactorizar

function generarNumero(valor) {
    let numero = parseInt((Math.random() * valor) + 1);
    return numero;
}