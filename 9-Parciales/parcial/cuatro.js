
function Mostrar()
{

var numero1;
var numero2;
var multiplicacion;
var resta;
var suma;

numero1 = prompt("Ingrese el primer numero");
numero2 = prompt("Ingrese el segundo numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 == numero2)
{
    multiplicacion = (numero1*numero2)
    alert(+multiplicacion);

    if (multplicacion > 10)
    {
        alert("Supero los 10")
    }

}  

else if (numero1 > numero2)
{    
resta = (numero1-numero2)
    alert(+resta);
}
else if (numero1 < numero2)
{ 
    suma = (numero1+numero2)
    alert(+suma);
}
}


