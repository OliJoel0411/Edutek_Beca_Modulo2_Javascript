//Definimos el arreglo inicial
let estudiantes = [];

function agregarEstudiante(){
    let nombreEstudiante = document.getElementById("nombreEstudiante").value;
    let promedioEstudiante = Number(document.getElementById("promedioEstudiante").value);


    let aprobadoValor = document.getElementById("aprobado").checked;
    
    let estudiante = {
        nombre: nombreEstudiante,
        promedio: promedioEstudiante,
        aprobado: aprobadoValor 
    }

    //Agregamos el estudiante al arreglo
    estudiantes.push(estudiante);

    mostrarCantidadEstudiantes();

}

function mostrarCantidadEstudiantes(){
    let parrafo = document.getElementById("cantidadElementos");

    parrafo.innerText = "La cantidad de estudiantes es: " + estudiantes.length;

    console.log(estudiantes);

}