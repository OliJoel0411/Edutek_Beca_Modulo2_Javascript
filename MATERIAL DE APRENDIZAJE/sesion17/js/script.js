
//buscar 1 elemento segun el selector
let primerDiv = document.querySelector("#miDiv");
let prueba = document.getElementById("miDiv");

//Buscar todos los elementos segun el selector
let elementos = document.querySelectorAll(".color");

//estilos calculados por el navegador
let estilosCalculados = window.getComputedStyle(primerDiv);

console.log(estilosCalculados["background-color"]);


//si es fondo verde, cambiarlo a rojo
//si es rojo, cambiarlo a azul,
//si es azul, cambiarlo a verde
function cambiarColor() {
    if (estilosCalculados.backgroundColor == 'rgb(0, 128, 0)') {
        primerDiv.style.backgroundColor = 'red';
    }else if(estilosCalculados.backgroundColor == 'rgb(255, 0, 0)'){
        primerDiv.style.backgroundColor = 'blue';
    } else{
        primerDiv.style.backgroundColor = 'green';
    }
}