function Mostrar()
{
    var precio;
    var preciofinal;
    precio = prompt("Ingrese un precio: ")
    precio = parseInt(precio);
    preciofinal= (precio*0.75)
    document.getElementById("importeFinal").value=preciofinal;
}
