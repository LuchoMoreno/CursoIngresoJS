//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var contador=0;
	var max
	var min
	var primera=true
	while(contador<7)
	{
		contador++;
		importe=prompt("Ingrese un numero");
		importe=parseInt(importe)
		if(importe<0)
		{
			contador++
			importe=prompt("Error ingrese un numero mayor que cero")
			importe=parseInt(importe)
		}
		
			if(primera)
		{
			primera=false
			max=importe
			min=importe
		}
		
		else
		{
			if(importe>max)
			{
				max=importe
			}
			else if(importe<min)
			{
				min=importe
			}
		}
	}

	alert("El mayor vendido fue: "+(max)+" y el menor vendido fue: "+(min))
	

}