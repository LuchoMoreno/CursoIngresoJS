//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var terreno;
	largo = document.getElementById("largo").value;
	ancho = document.getElementById("ancho").value;
	terreno = ((largo*2)+(ancho*2))*6
	alert("Se necesita de alambre: "+terreno)
}

