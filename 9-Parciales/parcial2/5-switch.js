//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var mes;
mes = prompt("Ingrese un mes del año");

switch(mes)
{
	case "Enero":
	case "Febrero":
	alert("Veranito!!")
	break;

	default:
	alert("Extraño Enero o Febrero!!")
}

}

