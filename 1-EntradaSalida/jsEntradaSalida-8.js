/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado2;
    var resultado1;
    var resto;
    var dividendo;
    var divisor;
    dividendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;
    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);
    resultado1 = (dividendo/divisor);
    resultado2 = (resultado1*divisor);
    resto = (dividendo-resultado2);
    alert("El resto termina siendo :" +resto);
}
