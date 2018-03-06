//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notatotal
	var notaparcial
	var sexo
	var notaparcial=0
	var contadorVarones=0
	var min=0
	var acumuladorparcial=0
	for(var i=1;i<=6;i++)
	{
	notaparcial=prompt("ingrese si nota")
	notaparcial=parseInt(notaparcial)
	while(isNaN(notaparcial)||notaparcial>10||notaparcial<0)
	{
		notaparcial=prompt("error ingrese entre ")
		notaparcial=parseInt(notaparcial)
	

	}
		acumuladorparcial=acumuladorparcial+notaparcial
		sexo=prompt("ingrese su sexo")
	
	while(sexo!="f"&&sexo!="m")
	{
		sexo=prompt("error ingrese f o m")
		while(sexo==null)
		{
			sexo=prompt("error ingrese f o m")
		}
	}
	if(i==1)
	{
		min=notaparcial
	}
	else
	{
		if(notaparcial<min)
		{
			min=notaparcial
		}
	}

	if(sexo=="m"&&notaparcial>6)
	{
		contadorVarones++
	}
	

	}
	
	notatotal=acumuladorparcial/i
	alert("el promedio es "+(notatotal)+"la nota mas baja es "+(min)+"la cantidad de hombres aprobado es "+(contadorVarones))

}

