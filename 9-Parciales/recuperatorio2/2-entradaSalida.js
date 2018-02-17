//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var inicial;
	var preciofinal;
	var preciofinal2;
	inicial = prompt("Ingrese un valor: ");
	inicial = parseInt(inicial);
	preciofinal = (inicial*0.21);
	preciofinal2 = (inicial + preciofinal);
	document.getElementById("importe").value = preciofinal2;	
}

