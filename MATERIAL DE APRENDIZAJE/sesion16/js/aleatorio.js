
//generando numeros aleatorios

//generar un numero aleatorio entre
//1 y 3
//si el resultado es 1 -> mostrar "Hola"
//si es 2 -> mostrar "Mundo"
//si es 3 -> mostrar "Adios"
let numero = parseInt((Math.random() * 3) + 1);
console.log(numero);

if(numero == 1){
    console.log("Hola");
}else if(numero == 2){
    console.log("Mundo");
}else{
    console.log("Adios");
}
