function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	var numero;

	while (respuesta==true)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		while (isNaN(numero)==true)
		{
			numero = prompt(numero);
			numero = parseInt(numero);
		}
	if(numero>0)
	{
		positivo+=numero
	}
	else
	{
		if (numero!=0)
		{
			negativo*=numero
		}
	
	}

	respuesta = confirm("Desea continuar?")
		if(respuesta==false)
		{
			break;
		}
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN