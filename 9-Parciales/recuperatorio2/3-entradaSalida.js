//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var final;
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;
	final = ((largo*2) + (ancho*2))*6;
	alert(+final);
}

