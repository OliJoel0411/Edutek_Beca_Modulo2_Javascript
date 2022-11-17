

function cargarValores(){
    //definimos nuestro objeto
    let producto = {
        "codigo": "A-1",
        "tipo": "Lacteo",
        "imagen": "https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/14-Leche-700x990.png",
        "nombre": "Leche entera" 
    }
    console.log(producto);

    //colocar lor valores en el formulario
    document.getElementById("codigo_producto").value = producto.codigo;

    document.getElementById("nombre_producto").value= producto.nombre;

    document.getElementById("tipo_producto").value = producto.tipo;

    document.getElementById("imagen_producto").src=producto.imagen;

}

function mostrarTipo(){

    let valorIngresado = document.getElementById("tipo_producto").value;

    document.getElementById("ver_producto").value = valorIngresado;


}