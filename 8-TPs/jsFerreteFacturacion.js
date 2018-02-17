/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var suma;
    var precio1;
    var precio2;
    var precio3;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    suma = (precio1+precio2+precio3);
    alert("La suma es: "+suma);

}

function Promedio () 
{
    var promedio;
    var precio1;
    var precio2;
    var precio3;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    promedio = ((precio1 + precio2 + precio3)/3);
    alert("El promedio es: "+promedio);

}

function PrecioFinal () 
{
    var promedioiva;
    var promedioiva2;
    var suma;
    var precio1;
    var precio2;
    var precio3;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    suma = (precio1 + precio2 + precio3);
    promedioiva = (suma)*0.21;
    promedioiva2 = (suma + promedioiva);
    alert("El costo final con IVA es: "+promedioiva2);
}