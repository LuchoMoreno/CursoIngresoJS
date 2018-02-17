function Mostrar()
{
	var numero
	numero = Math.floor(Math.random()*(11-1)+1)

	if (numero>=9)
	{
		alert("Excelente: "+numero)
	}
	else if (numero>=7 && numero<=8)
	{
		alert("Muy bien: "+numero)
	}	
	else if (numero>=4 && numero<=6)
	{
		alert("Bien: "+numero)
	}
	else if (numero>=2 && numero<=3)
	{
		alert("Mal: "+numero)
	}
	else if (numero<=1)
	{
		alert("Pesimo: "+numero)
	}
}//FIN DE LA FUNCIÓN