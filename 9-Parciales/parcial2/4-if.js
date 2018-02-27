//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var numero1;
var numero2;
var resta;
var suma;
var multiplicacion;

numero1= prompt("Ingrese el primer numero:");
numero2= prompt("Ingrese el segundo numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
	
	if (numero1 == numero2)
	{
		multiplicacion = (numero1*numero2)
		alert(+multiplicacion)
	}

	else if (numero1 > numero2)
	{
		resta = (numero1-numero2)
		alert(+resta)
	}
	
	else if (numero1 < numero2)
	{
		suma = (numero1+numero2)
		alert(+suma)
	}




}


