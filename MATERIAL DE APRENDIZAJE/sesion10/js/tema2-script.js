
let arreglo = [];

let estudiantes = [{nombreEstudiante: "Ramiro", edadEstudiante:22}];

function agregarAlArreglo() {
    let textoIngresado = document.getElementById("txtValor").value;
    //agregar elementos al arreglo
    arreglo.push(textoIngresado);
    console.log(arreglo);
    document.getElementById("txtValor").value = "";
}

function agregarEstudiante() {
    //capturar el nombre
    let nombre = document.getElementById("txtNombre").value;
    //capturar la edad
    let edad = document.getElementById("txtEdad").value;
    //construir un objeto estudiante
    let estudiante = {
        nombreEstudiante: nombre,
        //lo convertimos a tipo numerico
        edadEstudiante: Number(edad)
    };
    //agregar el objeto al arreglo
    estudiantes.push(estudiante);
    //mostramos el arreglo en la consola
    console.log(estudiantes);
    //llamamos a la funcion que agrega una fila a la tabla
    agregarFilaTabla();
}

function agregarFilaTabla(){
    //identifico la tabla
    let tabla = document.getElementById("miTabla");
    //agrego una fila a la tabla
    let fila = tabla.insertRow(-1);
    //agrego celdas a la fila
    let celdaNombre = fila.insertCell(0);
    let celdaEdad = fila.insertCell(1);
    //cambio el contenido de las celdas, los datos del ultimo estudiante
    celdaNombre.innerHTML = estudiantes[estudiantes.length -1].nombreEstudiante;
    celdaEdad.innerHTML = estudiantes[estudiantes.length-1].edadEstudiante;
    console.log(celdaNombre);

}