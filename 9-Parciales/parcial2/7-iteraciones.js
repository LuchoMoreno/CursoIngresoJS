//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	 var acumulador=0
	 var nota;
	 var min;
	 var sexo;
	 var promedio;
	 var cantidadvarones;
	
	for(i=1; i<=3; i++)
	{
		nota=prompt("Ingrese la nota")
		while (nota<0 || nota>10)
			{
				nota=prompt("Ingrese nuevamente un valor correcto para la nota")
			}

		sexo=prompt("Ingrese el sexo (en mayusculas). F (Femenino) - M (Masculino)")
		while (sexo!="F" && sexo!="M")
			{
				sexo=prompt("Ingrese el sexo correctamente. F (Femenino) - M (Masculino)")
			}
		

	if (i==1)
	{
	min=nota;	
	}
	else
	{
		if(nota<min)
		{
			min=nota
		}
	}
	

	} //finaliza for
	alert("el promedio es: "+promedio)
	alert("La nota minima es: "+min)
	}


