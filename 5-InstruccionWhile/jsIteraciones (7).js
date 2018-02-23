function Mostrar()
{
	var numero
	var contador=1;
	var acumulador=0;
	var respuesta
	while(respuesta!=false)
	{
		numero=prompt("ponga cancelar cuando quieras sumar","");
		numero=parseInt(numero)
		if(isNaN(numero)==true)
		{
			alert("esto no es un numero")
			break;
		}
		else if(numero==null)
		{
			alert ("este no es un numero")
			break;
		}
		
		
		contador++;
		acumulador=acumulador+numero;
		respuesta= confirm("desea continuar")
		
		if (respuesta==false) {
			break;
		}
		
	}

	/*var contador=0;
	var acumulador=0;
	var respuesta
	while(true)
	{
		if()
	}
	*/
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN