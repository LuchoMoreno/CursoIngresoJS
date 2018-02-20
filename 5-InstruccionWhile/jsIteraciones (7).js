function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

while(respuesta!=false)
{
	contador++
	numero = prompt("Ingrese numeros:")
	numero = parseInt(numero)
	acumulador = acumulador + numero
	respuesta = confirm("¿Desea continuar?")
	
	if (respuesta==false)
	{
		break;
	}
	
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN