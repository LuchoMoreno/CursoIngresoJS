/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var resultado;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    resultado = (numero1 + numero2);
    alert("La suma es: " +resultado);
}

function restar()
{
	var resultado;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    resultado = (numero1 - numero2);
    alert("La resta es: " +resultado);
}

function multiplicar()
{ 
	var resultado;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    resultado = (numero1 * numero2);
    alert("La multiplicación es: " +resultado);
}

function dividir()
{
	var resultado;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    resultado = (numero1 / numero2);
    alert("La división es: " +resultado);
}

