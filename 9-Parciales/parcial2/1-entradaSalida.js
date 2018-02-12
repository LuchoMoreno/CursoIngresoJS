//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var final;
	base = document.getElementById("lado").value;
	base = parseInt(base);
	final = (base)*3;
	alert("El perimetro es: " +final);
}

