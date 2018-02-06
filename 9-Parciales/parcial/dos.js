function Mostrar()
{
    var importe;
    var resultado;
    var resultado2;
    importe = prompt("Ingrese el importe:");
    importe = parseInt(importe);
    resultado = (importe*0.21);
    resultado2 = (importe+resultado);
    document.getElementById("importeFinal").value=resultado2;
}
