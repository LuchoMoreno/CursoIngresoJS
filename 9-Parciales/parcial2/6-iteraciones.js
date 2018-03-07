//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var max;
	var min;
	var primera = true;

	for(i=0; i<7; i++)
	{
		ventas = prompt("Ingrese el numero de ventas.")
		ventas = parseInt(ventas)
		
		while(ventas<0)
		{
			ventas = prompt("Ingrese correctamente el numero de ventas. Mayor a 0")
			ventas = parseInt(ventas)
		}

		if (primera)
		{
			primera = false
			max = ventas
			min = ventas
		}
		
		else
		{
			if (ventas > max)
			{
				max = ventas
			}

			else (ventas < min)
			{
				min = ventas
			}
		}
	
	}
	
	alert("El minimo de ventas es: "+min + " y el maximo de ventas es: "+max)

} 