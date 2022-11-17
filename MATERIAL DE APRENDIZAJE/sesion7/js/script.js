

function contarLetras() {
    let cadena = document.getElementById("texto1").value;
    let cantidad = cadena.length;
    document.getElementById("resultado").innerHTML = `La palabra ${cadena} tiene ${cantidad} letras.`
}

function letraEn() {
    let cadena = document.getElementById("texto1").value;
    let numero = document.getElementById("texto2").value;
    let caracter = cadena.charAt(numero - 1);

    document.getElementById("resultado").innerHTML = `La letra en la posicion ${numero} es ${caracter}.`
}

function sumar(){
    let numero1 = Number(document.getElementById("texto1").value);
    let numero2 = Number(document.getElementById("texto2").value);

    document.getElementById("resultado").innerHTML = `La suma es ${numero1 + numero2}.`
}

//resta, multiplicacion, division


