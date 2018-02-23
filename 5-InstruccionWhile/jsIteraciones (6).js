function Mostrar()
{
	var resultado
	var numero;
	var contador=0;
	var acumulador=0;
	while(contador<5)
	{
		contador++;
		numero=prompt("ingrese su numero","");
		numero=parseInt(numero)
		acumulador=acumulador+numero;

	}
	resultado=acumulador/contador

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=resultado;

}//FIN DE LA FUNCIÓN