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
		importe=prompt("ingrese un numero");
		importe=parseInt(importe)
		if(importe<0)
		{
			contador++
			importe=prompt("error ingrese un numero mayor que cero")
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
	alert("el mayor vendido fue"+(max)+"y el menor vendido es"+(min))
	

} 