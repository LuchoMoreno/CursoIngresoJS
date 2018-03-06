//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var acumulador=0
	var pares=0
	var numero
	var promedio=0
	var primera=true
	var max=0
	var min=0
	numero=prompt("ingrese numeros positivo")
	numero=parseInt(numero)
	while(isNaN(numero)||numero<0||numero==null)
	{
		numero=prompt("error ingrese numeros postivos")
		numero=parseInt(numero)
	}
	contador++
	acumulador=acumulador+numero

		if(numero%2==0)
	{	
	pares++
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
promedio=acumulador/contador
document.write(promedio)

}

