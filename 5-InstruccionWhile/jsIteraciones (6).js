function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var residuo;

while(contador<5)
{
	contador++
	numero = prompt("Ingrese numeros")
	numero = parseInt(numero)
	acumulador = acumulador + numero

}

	residuo = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;




}//FIN DE LA FUNCIÓN