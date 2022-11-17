//Trabajando con validaciones y instanceof

//Funciones que reciben valores

function funcion1(){
    let valor = 1500;
    mostrarValorRecibido(valor);
    mostrarValorRecibido("Mensaje diferente");
}

function mostrarValorRecibido(variable){
    console.log("El valor recibido es: ", variable)
}

//funcion que no comprueba el tipo del parametro recibido
function mostrarElementoArreglo(arreglo){
    console.log(arreglo[0]);
}

//funcion que compruebe que el valor recibido sea el correcto
function verificarMostrarElementoArreglo(arreglo){
    //nos permite ejecutar instrucciones en base a una condicion
    if(arreglo instanceof Array){
        //se cumple la condicion
        console.log("Si es un arreglo!!!!!")
        console.log(arreglo[0]);
    }else{
        console.log("Tipo incorrecto, se esperaba un arreglo");
        console.log("Se recibio un", typeof arreglo);
    }
}