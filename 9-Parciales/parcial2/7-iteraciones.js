//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	 var contador=0
	 var nota;
	 var sexo;
	 var promedio;
	 var notamasbaja;
	 var cantidadvarones;
	
	for(i=1; i<=3; i++)
	{
		nota=prompt("Ingrese la nota")
		while (nota<0 || nota>10)
			{
				nota=prompt("Ingrese nuevamente un valor correcto para la nota")
			}
		contador++
		
		sexo=prompt("Ingrese el sexo (en mayusculas). F (Femenino) - M (Masculino)")
		while (sexo!="F" && sexo!="M")
			{
				sexo=prompt("Ingrese el sexo correctamente. F (Femenino) - M (Masculino)")
			}
	

	}






}

