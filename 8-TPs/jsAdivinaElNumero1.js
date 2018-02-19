/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

/*Para la clase que viene los intentos no deben ser mayor a 10 y no debe acertar en el primer intento (trampa)*/


var numeroSecreto 
var numero 
var falta 
var pasa
var contadorIntentos

function comenzar()
{
  contadorIntentos = 0;
	numeroSecreto= Math.floor((Math.random()*(101-1))+1);
  console.log(numeroSecreto);
}

function verificar()
{
  numero= document.getElementById("numero").value;

  if (numero==numeroSecreto) 
  {
    contadorIntentos++;
    alert("Acertaste!");
    document.getElementById("intentos").value = contadorIntentos;
  }
  else if(numero>numeroSecreto)
  {
    pasa= numero - numeroSecreto;
    contadorIntentos++;
    alert("Se pasó por "+pasa);
    document.getElementById("intentos").value = contadorIntentos;
  }
  else if(numero<numeroSecreto)
  {
    falta= numeroSecreto- numero;
    contadorIntentos++;
    alert("Te falta "+falta);
    document.getElementById("intentos").value = contadorIntentos;
  }
  
}
