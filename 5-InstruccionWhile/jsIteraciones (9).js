function Mostrar()
{

	var contador=0;
	var max=0
	var min=0
	var numero
	var respuesta=true
	var primera=true

	while(respuesta==true)
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero)==true)
		{
			numero=prompt("ingrese un numero")
			numero=parseInt(numero)
		}
		if(primera)
		{
			primera=false
			max=numero
			min=numero
		}
		else
		{
			if(numero>max)
			{
				max=numero
			}
			else if(numero<min)
			{
				min=numero
			}
		}
		respuesta= confirm("desea continuar")
		
		if (respuesta==false) {
			break;
	}
	}


document.getElementById('maximo').value=max
document.getElementById('minimo').value=min

}//FIN DE LA FUNCIÓN